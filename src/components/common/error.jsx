import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/error.scss';
import '../../scss/buttons.scss';

const Error = ({
  message,
  canBack,
  backFunc,
}) => (
  <div className="error">
    <div className="error__message">{message}</div>
    {canBack && <button className="btn" onClick={backFunc} type="button">Back</button>}
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
  backFunc: PropTypes.func,
  canBack: PropTypes.bool,
};

Error.defaultProps = {
  backFunc: null,
  canBack: false,
};

export default Error;
