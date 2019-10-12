import React from 'react';
import ListEntity from './listEntity';
import '../scss/list.scss';

const list = ({
  listType,
  entityType,
  entities,
}) => (
  <div className={`${listType}-list`}>
    {entities.map(entity => (
      <ListEntity
        key={entity.id}
        listType={listType}
        entityType={entityType}
        entity={entity}
      />
    ))}
  </div>
);

export default list;
