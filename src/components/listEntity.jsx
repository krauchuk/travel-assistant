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
        <img src={entity.pic} />
        <div className="entity-body">
          <div className="entity-header">{entity.name}</div>
          <div className="entity-stars">&#9733;{entity.stars}</div>
        </div>
        { entity.info && entity.info.price ?
            <div className="entity-price">{entity.info.price}</div>
            : null
        }
      </div>
    </Link>
  </div>
);

export default entity;
