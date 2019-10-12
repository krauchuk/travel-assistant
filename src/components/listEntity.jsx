import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/listEntity.scss';

const entity = ({
  listType,
  entityType,
  entity,
}) => (
  <div className={`${listType}-list-entity`}>
    <Link to={`/${entityType}/${entity.id}`}>
      <div id={entity.id}>
        {entity.pic}
        {entity.name}
        {entity.stars}
      </div>
    </Link>
  </div>
);

export default entity;
