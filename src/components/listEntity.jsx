import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/listEntity.scss';

const entity = ({
  listType,
  entityType,
  entity,
  onClickHandle,
}) => (
  <div className={`${listType}-list-entity`}>
    <Link to={`/${entityType}/${entity.id}`}>
      <div id={entity.id} onClick={onClickHandle}>
       {entity.pic ?
        <img src={entity.pic} />
        : <div className="image-not-found">
          <span className="image-not-found-text">
            {'No photo :('}
          </span>
        </div>
       }
        <div className="entity-body">
          <div className="entity-header">{entity.name}</div>
          <div className="entity-stars">&#9733;{entity.stars}</div>
        </div>
        { entity.info && entity.info.price ?
            <div className="entity-list-price">{entity.info.price}</div>
            : null
        }
      </div>
    </Link>
  </div>
);

export default entity;
