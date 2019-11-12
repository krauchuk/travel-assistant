import React from 'react';
import '../../scss/error.scss';
import '../../scss/buttons.scss';

interface Props {
  message: string;
  canBack?: boolean;
  backFunc?: () => void;
}

const Error: React.FC<Props> = ({
  message,
  canBack = false,
  backFunc = () => {},
}: Props) => (
  <div className="error">
    <div className="error__message">{message}</div>
    {canBack && <button className="btn" onClick={backFunc} type="button">Back</button>}
  </div>
);

export default Error;
