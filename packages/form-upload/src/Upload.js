import React, { Suspense, useEffect, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UploadCore from '@availity/upload-core';
import { avFilesDeliveryApi } from '@availity/api-axios';
import { Input, InputGroup } from 'reactstrap';
import { FormGroup, Feedback } from '@availity/form';
import Icon from '@availity/icon';
import { useField, useFormikContext } from 'formik';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import FilePickerBtn from './FilePickerBtn';
import FileList from './FileList';
import '../styles.scss';

const Dropzone = React.lazy(() => import('react-dropzone'));

const dropzoneFallback = <div data-testid="dropzone-fallback">Loading...</div>;

const Upload = ({
  allowedFileNameCharacters,
  allowedFileTypes,
  btnText,
  bucketId,
  children,
  className,
  clientId,
  customerId,
  deliverFileOnSubmit = false,
  deliveryChannel,
  onDeliverySuccess,
  onDeliveryError,
  disabled = false,
  feedbackClass,
  fileDeliveryMetadata,
  getDropRejectionMessage,
  max,
  maxSize,
  totalMaxSize,
  multiple = true,
  name,
  onFileRemove,
  onFilePreUpload = [],
  onFileUpload,
  showFileDrop = false,
  fallback = dropzoneFallback,
}) => {
  const [field, metadata] = useField(name);
  const { errors, isSubmitting, isValidating, setFieldError, setFieldValue, setFieldTouched } = useFormikContext();
  const classes = classNames(
    className,
    metadata.touched ? 'is-touched' : 'is-untouched',
    metadata.touched && metadata.error && 'is-invalid'
  );
  const [totalSize, setTotalSize] = useState(0);

  const fieldValue = useMemo(() => (Array.isArray(field.value) ? field.value : []), [field]);

  const callFileDelivery = useCallback(
    async (upload) => {
      if (!Array.isArray(upload)) upload = [upload];
      const uploadResults = [];
      try {
        for (const u of upload) {
          const data = {
            deliveries: [
              {
                deliveryChannel,
                fileURI: u.references[0],
                metadata: typeof fileDeliveryMetadata === 'function' ? fileDeliveryMetadata(u) : fileDeliveryMetadata,
              },
            ],
          };

          uploadResults.push(
            avFilesDeliveryApi.uploadFilesDelivery(data, {
              clientId,
              customerId,
            })
          );
        }

        const responses = await Promise.all(uploadResults);
        if (typeof onDeliverySuccess === 'function') {
          onDeliverySuccess(responses);
        }
      } catch (error) {
        setFieldError(name, 'An error occurred while uploading files.');
        if (typeof onDeliveryError === 'function') {
          onDeliveryError(error);
        }
      }
    },
    [
      clientId,
      customerId,
      deliveryChannel,
      fileDeliveryMetadata,
      name,
      setFieldError,
      onDeliverySuccess,
      onDeliveryError,
    ]
  );

  useEffect(() => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    async function checkValidFormAndCallFileDelivery() {
      if (Object.keys(errors).length === 0) {
        // deliver all on submit
        await callFileDelivery(fieldValue);
      }
    }
    if (
      !onFileUpload &&
      isSubmitting === true &&
      isValidating === false &&
      deliverFileOnSubmit &&
      deliveryChannel &&
      fileDeliveryMetadata
    ) {
      checkValidFormAndCallFileDelivery();
    }
  }, [
    callFileDelivery,
    deliverFileOnSubmit,
    deliveryChannel,
    errors,
    fieldValue,
    fileDeliveryMetadata,
    isSubmitting,
    isValidating,
    onFileUpload,
  ]);

  const removeFile = (fileId) => {
    const newFiles = fieldValue.filter((file) => file.id !== fileId);
    if (newFiles.length !== fieldValue.length) {
      setFieldValue(name, newFiles, true);
      const removedFile = fieldValue.find((file) => file.id === fileId);
      if (!removedFile.error && !removedFile.errorMessage) setTotalSize(totalSize - removedFile.file.size);
      if (onFileRemove) onFileRemove(newFiles, fileId);
    }
  };

  const setFiles = (files) => {
    let selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      selectedFiles[i] = files[i];
    }

    if (max && selectedFiles.length + fieldValue.length > max) {
      selectedFiles = selectedFiles.slice(0, Math.max(0, max - fieldValue.length));
    }

    // eslint-disable-next-line unicorn/prefer-spread
    let newFilesTotalSize = 0;
    const newFiles = [
      ...fieldValue,
      ...selectedFiles.map((file) => {
        const upload = new UploadCore(file, {
          bucketId,
          customerId,
          clientId,
          onPreStart: onFilePreUpload,
          fileTypes: allowedFileTypes,
          maxSize,
          allowedFileNameCharacters,
        });
        upload.id = `${upload.id}-${uuid()}`;
        if (file.dropRejectionMessage) {
          upload.errorMessage = file.dropRejectionMessage;
        } else if (totalMaxSize && totalSize + newFilesTotalSize + upload.file.size > totalMaxSize) {
          upload.errorMessage = 'Total documents size is too large';
        } else {
          upload.start();
          newFilesTotalSize += upload.file.size;
        }
        if (onFileUpload) {
          onFileUpload(upload);
        } else if (deliveryChannel && fileDeliveryMetadata) {
          upload.onSuccess.push(() => {
            if (upload?.references?.[0]) {
              // allow form to revalidate when upload is complete
              setFieldTouched(name, true);
              // deliver upon upload complete, not form submit
              if (!deliverFileOnSubmit) {
                callFileDelivery(upload);
              }
            }
          });
        }

        return upload;
      }),
    ];

    setTotalSize(totalSize + newFilesTotalSize);
    setFieldValue(name, newFiles, true);
  };

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
  };

  const onDrop = (acceptedFiles, fileRejections) => {
    const rejectedFilesToDrop = fileRejections.map(({ file, errors }) => {
      const dropRejectionMessage = getDropRejectionMessage
        ? getDropRejectionMessage(errors, file)
        : errors.map((error) => error.message).join(', ');

      file.dropRejectionMessage = dropRejectionMessage;
      return file;
    });
    setFiles([...acceptedFiles, ...rejectedFilesToDrop]);
  };

  let fileAddArea;
  const text = btnText || (
    <>
      <Icon name="plus-circle" title="Add File Icon" />
      {fieldValue.length === 0 ? 'Add File' : 'Add Another File Attachment'}
    </>
  );

  if (!max || fieldValue.length < max) {
    fileAddArea = showFileDrop ? (
      <FormGroup for={name}>
        <Input name={name} style={{ display: 'none' }} />
        <InputGroup disabled={disabled} className={classes}>
          <Suspense fallback={fallback}>
            <Dropzone onDrop={onDrop} multiple={multiple} maxSize={maxSize} accept={allowedFileTypes}>
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section>
                  <div
                    {...getRootProps({
                      className: isDragActive ? 'file-drop-active' : 'file-drop',
                    })}
                  >
                    <input data-testid="file-picker" {...getInputProps()} />
                    <p>
                      <strong>Drag and Drop</strong>
                    </p>
                    {text}
                  </div>
                </section>
              )}
            </Dropzone>
          </Suspense>
        </InputGroup>
        <Feedback className={classNames('d-block', feedbackClass)} name={name} />
      </FormGroup>
    ) : (
      <FilePickerBtn
        data-testid="file-picker"
        onChange={handleFileInputChange}
        color={fieldValue.length === 0 ? 'light' : 'link'}
        multiple={multiple}
        allowedFileTypes={allowedFileTypes}
        maxSize={maxSize}
        name={name}
        disabled={disabled}
      >
        {text}
      </FilePickerBtn>
    );
  }

  return (
    <>
      <FileList files={fieldValue} onRemoveFile={removeFile} data-testid="file-list">
        {children}
      </FileList>
      {fileAddArea}
    </>
  );
};

Upload.propTypes = {
  bucketId: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired,
  customerId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  allowedFileNameCharacters: PropTypes.string,
  allowedFileTypes: PropTypes.arrayOf(PropTypes.string),
  btnText: PropTypes.node,
  children: PropTypes.func,
  className: PropTypes.string,
  deliverFileOnSubmit: PropTypes.bool,
  deliveryChannel: PropTypes.string,
  disabled: PropTypes.bool,
  fallback: PropTypes.node,
  feedbackClass: PropTypes.string,
  fileDeliveryMetadata: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  getDropRejectionMessage: PropTypes.func,
  max: PropTypes.number,
  maxSize: PropTypes.number,
  totalMaxSize: PropTypes.number,
  multiple: PropTypes.bool,
  onDeliveryError: PropTypes.func,
  onDeliverySuccess: PropTypes.func,
  onFilePreUpload: PropTypes.arrayOf(PropTypes.func),
  onFileRemove: PropTypes.func,
  onFileUpload: PropTypes.func,
  showFileDrop: PropTypes.bool,
};

export default Upload;
