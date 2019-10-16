import React from 'react';
import '../../scss/image.scss';

const NoPic = ({ type }) => (
  <div className={`${type}-img-not-found`}>
    <span className="img-not-found-text">
      {'No photo :('}
    </span>
  </div>
);

export default NoPic;
