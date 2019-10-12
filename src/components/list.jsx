import React from 'react';
import ListEntity from './listEntity';

const list = ({
  entityType,
  entities,
}) => (
  <div>
    {entities.map(entity => (
      <ListEntity
        key={entity.id}
        entityType={entityType}
        entity={entity}
      />
    ))}
  </div>
);

export default list;
