import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useEffectAsync } from '@availity/hooks';
import { avWebQLApi } from '@availity/api-axios';
import ReactMarkdown from 'react-markdown';
import { ModalBody } from 'reactstrap';
import Loader from '../Loader';

const disclaimerQuery = `query configurationFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`;

const DisclaimerModal = ({ disclaimerId }) => {
  const [disclaimer, setDisclaimer] = useState('');

  const fetchDisclaimer = async () => {
    if (disclaimerId) {
      const result = await avWebQLApi.create({ query: disclaimerQuery, variables: { id: disclaimerId } });

      setDisclaimer(get(result, 'data.data.configurationFindOne.description'));
    }
  };

  useEffectAsync(async () => {
    await fetchDisclaimer();
  }, [disclaimerId]);

  return (
    <ModalBody>
      {disclaimer ? <ReactMarkdown>{disclaimer}</ReactMarkdown> : <Loader skeletonProps={{ count: 5 }} />}
    </ModalBody>
  );
};

DisclaimerModal.propTypes = {
  disclaimerId: PropTypes.string,
};

export default DisclaimerModal;
