import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import Destination from './destination';
import '../../scss/destinations.scss';

const Destinations = ({
  listType,
  destinationsType,
  destinations,
  onClickHandle,
}) => (
  <div className={`${listType}-list`}>
    {destinations.map((destination) => (
      <Destination
        key={destination.id}
        listType={listType}
        destinationType={destinationsType}
        destination={destination}
        onClickHandle={onClickHandle}
      />
    ))}
  </div>
);

Destinations.propTypes = {
  listType: PropTypes.string.isRequired,
  destinationsType: PropTypes.string.isRequired,
  destinations: appPropTypes.destinations.isRequired,
  onClickHandle: PropTypes.func,
};

Destinations.defaultProps = {
  onClickHandle: null,
};

export default Destinations;
