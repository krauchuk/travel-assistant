import React from 'react';
import '../../scss/image.scss';

interface Props {
  type: string;
}

const NoPic: React.FC<Props> = ({ type }: Props) => (
  <div className={type === 'entity' ? `${type}__img--not-found` : `${type}-list__img--not-found`}>
    <span className="img__text--not-found">
      No photo :(
    </span>
  </div>
);

export default NoPic;
