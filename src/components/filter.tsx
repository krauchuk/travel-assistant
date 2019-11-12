import React from 'react';
import '../scss/buttons.scss';
import '../scss/filter.scss';

interface Props {
  types: [{
    id: number;
    name: string;
  }];
  selectedEntityTypeId: number;
  clickHandle: (typeId: number) => void;
}

const Filter: React.FC<Props> = ({
  types,
  selectedEntityTypeId,
  clickHandle,
}: Props) => (
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

export default Filter;
