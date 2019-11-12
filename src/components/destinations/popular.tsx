import React from 'react';
import * as Types from '../../types';
import Destinations from './index';
import '../../scss/text.scss';

interface Props {
  destinations: Array<Types.destination>;
  destinationsType: string;
  onClickHandle?: (e: React.MouseEvent) => void;
}

const Popular: React.FC<Props> = ({
  destinationsType,
  destinations,
  onClickHandle = () => {},
}: Props) => (
  <div>
    <span className="primary-header__text">
      { destinationsType }
      <span className="primary-header__text--hot">Hot</span>
    </span>
    <Destinations
      listType="grid"
      destinationsType={destinationsType}
      destinations={destinations}
      onClickHandle={onClickHandle}
    />
  </div>
);

export default Popular;
