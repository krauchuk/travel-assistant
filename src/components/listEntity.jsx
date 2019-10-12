import React from 'react';
import { Link } from 'react-router-dom';

const entity = ({
  entityType,
  entity,
}) => (
  <Link to={`/${entityType}/${entity.id}`}>
    <div id={entity.id}>
      {entity.pic}
      {entity.name}
      {entity.stars}
    </div>
  </Link>
);

export default entity;
