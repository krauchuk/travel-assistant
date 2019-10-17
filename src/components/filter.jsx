import React from 'react';
import PropTypes from 'prop-types';
import '../scss/buttons.scss';
import '../scss/filter.scss';

const Filter = ({
  types,
  selectedEntityTypeId,
  clickHandle,
}) => (
  <div className="filter-block">
    { types.map((type) => (
      <div
        key={type.id}
        role="presentation"
        className={type.id === selectedEntityTypeId ? 'filter-block__btn--pressed' : 'filter-block__btn'}
        onClick={() => clickHandle(type.id)}
      >
        {type.name}
      </div>
    ))}
  </div>
);

Filter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedEntityTypeId: PropTypes.number.isRequired,
  clickHandle: PropTypes.func.isRequired,
};

export default Filter;
