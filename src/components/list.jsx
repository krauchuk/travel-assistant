import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../propTypes';
import Destinations from './destinations/index';
import Popular from './destinations/popular';
import Pagination from './common/pagination';

const List = ({
  destinationsType,
  popularDestinations,
  destinations,
  pagination,
  destinationClickHandle,
  paginationClickHandle,
}) => (
  <div>
    { !!popularDestinations.length &&
      <Popular
        destinationsType={destinationsType}
        destinations={popularDestinations}
        onClickHandle={destinationClickHandle}
      />}
    <Destinations
      listType="scroll"
      destinationsType={destinationsType}
      destinations={destinations}
      onClickHandle={destinationClickHandle}
    />
    { pagination &&
      <Pagination
        values={pagination || undefined}
        clickHandle={paginationClickHandle}
      />}
  </div>
);

List.propTypes = {
  destinationsType: PropTypes.string.isRequired,
  popularDestinations: appPropTypes.allPlural.isRequired,
  destinations: appPropTypes.allPlural.isRequired,
  pagination: appPropTypes.pagination,
  destinationClickHandle: PropTypes.func,
  paginationClickHandle: PropTypes.func.isRequired,
};

List.defaultProps = {
  pagination: null,
  destinationClickHandle: null,
};

export default List;
