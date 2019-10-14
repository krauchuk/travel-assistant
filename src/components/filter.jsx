import React from 'react';
import '../scss/buttons.scss';
import '../scss/filter.scss';

const filter = ({
  clickHandle,
  placeTypeId,
}) => (
  <div className="filter-block">
  {
    ['All', 'Lodging', 'Attractions', 'Food'].map((txt, index) => (
      <div
        key={index}
        className={'filter-btn' + (placeTypeId === index ? '-pressed' : '')}
        onClick={() => clickHandle(index)}
      >{txt}</div>
    ))
    }
</div>
);

export default filter;
