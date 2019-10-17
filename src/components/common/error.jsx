import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/error.scss';
import '../../scss/buttons.scss';

const Error = ({
  message,
  goBack,
}) => (
  <div className="error">
    <div className="error__message">{message}</div>
    {goBack && <button className="btn" onClick={goBack} type="button">Back</button>}
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
  goBack: PropTypes.func,
};

Error.defaultProps = {
  goBack: null,
};

export default Error;
