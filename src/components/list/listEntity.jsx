import React from 'react';
import { Link } from 'react-router-dom';
import NoPic from '../system/noPic';
import '../../scss/listEntity.scss';

const ListEntity = ({
  listType,
  entityType,
  entity,
  onClickHandle,
}) => (
  <div className={`${listType}-list-entity`}>
    <Link to={`/${entityType}/${entity.id}`}>
      <div id={entity.id} onClick={onClickHandle}>
       { entity.pic ? <img className={`${listType}-list-img`} src={entity.pic} /> : <NoPic type={listType} /> }
        <div className="entity-body">
          <div className="entity-header">{entity.name}</div>
          { entity.info && entity.info.address ?
            <div className="entity-list-address">{entity.info.address}</div>
            : null
          }
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

export default ListEntity;
