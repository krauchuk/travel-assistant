import React from 'react';
import List from './list';
import '../../scss/text.scss';

const PopularEntityGrid = ({
  entityType,
  entities,
  onClickHandle,
}) => (
  <div>
    <span className="header-text">
      { entityType } <span className="header-hot-text">Hot</span>
    </span>
    <List
      listType={'grid'}
      entityType={entityType}
      entities={entities}
      onClickHandle={onClickHandle}
    />
  </div>
);

export default PopularEntityGrid;
