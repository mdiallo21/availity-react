import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { avRegionsApi } from '@availity/api-axios';
import { ResourceSelect } from '..';

const RegionSelect = ResourceSelect.create({
  resource: avRegionsApi,
  labelKey: 'value',
  valueKey: 'id',
});

const AvRegionSelect = ({ defaultToCurrentRegion, name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const defaultRegion = useCallback(async () => {
    if (defaultToCurrentRegion) {
      try {
        const response = await avRegionsApi.getCurrentRegion();

        const value = response.data.regions[0];

        setFieldValue(name, value);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('AvRegionSelect failed to load the current region');
      }
    }
  }, [defaultToCurrentRegion, setFieldValue, name]);

  useEffect(() => {
    defaultRegion();
  }, [defaultRegion]);

<<<<<<< HEAD
  return <RegionSelect name={name} {...props} />;
=======
  return <RegionSelect name={name} pageAll {...props} />;
>>>>>>> 07afecc0c1d28bb24d1a4492fbc28db120c85ebc
};

AvRegionSelect.propTypes = {
  defaultToCurrentRegion: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default AvRegionSelect;
