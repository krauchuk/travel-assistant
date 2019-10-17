import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import Destinations from './index';
import '../../scss/text.scss';

const Popular = ({
  destinationsType,
  destinations,
  onClickHandle,
}) => (
  <div>
    <span className="primary-header__text">
      { destinationsType }
      <span className="primary-header__text--hot">Hot</span>
    </span>
    <Destinations
      listType="grid"
      destinationsType={destinationsType}
      destinations={destinations}
      onClickHandle={onClickHandle}
    />
  </div>
);

Popular.propTypes = {
  destinationsType: PropTypes.string.isRequired,
  destinations: appPropTypes.destinations.isRequired,
  onClickHandle: PropTypes.func,
};

Popular.defaultProps = {
  onClickHandle: null,
};

export default Popular;
