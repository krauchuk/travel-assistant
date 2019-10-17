import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/image.scss';

const NoPic = ({ type }) => (
  <div className={type === 'entity' ? `${type}__img--not-found` : `${type}-list__img--not-found`}>
    <span className="img__text--not-found">
      No photo :(
    </span>
  </div>
);

NoPic.propTypes = {
  type: PropTypes.string.isRequired,
};

export default NoPic;
