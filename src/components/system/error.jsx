import React from 'react';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const error = ({
  message,
  goBack,
}) => (
  <div>
    <div className="error-message">{message}</div>
    <button className="back-btn" onClick={goBack}>Back</button>
  </div>
);

export default error;
