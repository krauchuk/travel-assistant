import React from 'react';
import '../scss/buttons.scss';
import '../scss/filter.scss';

const Filter = ({
  types,
  selectedEntityTypeId,
  clickHandle,
}) => (
  <div className="filter-block">
  { types.map(type => (
      <div
        key={type.id}
        className={'filter-btn' + (type.id === selectedEntityTypeId ? '-pressed' : '')}
        onClick={() => clickHandle(type.id)}
      >{type.name}</div>
    ))
  }
</div>
);

export default Filter;
