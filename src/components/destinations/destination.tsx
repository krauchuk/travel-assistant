import React from 'react';
import { Link } from 'react-router-dom';
import * as Types from '../../types';
import NoPic from '../common/noPic';
import '../../scss/destination.scss';

interface Props {
  destination: Types.destination;
  destinationType: string;
  listType: string;
  onClickHandle?: (e: React.MouseEvent) => void;
}

const Destination: React.FC<Props> = ({
  listType,
  destinationType,
  destination: {
    id,
    pic,
    name,
    info,
    stars,
  },
  onClickHandle = () => {},
}: Props) => (
  <div className={`${listType}-list__entity`}>
    <Link to={`/${destinationType}/${id}`} id={id} onClick={onClickHandle}>
      { pic ? <img alt="destination pic" className={`${listType}-list__img`} src={pic} />
        : <NoPic type={listType} /> }
      <div className={`${listType}-list__body`}>
        <div className={`${listType}-list__header`}>{name}</div>
        { info.address &&
          <div className={`${listType}-list__list-address`}>{info.address}</div> }
        <div className={`${listType}-list__stars`}>
          &#9733;
          {stars}
        </div>
      </div>
      { info.price &&
        <div className={`${listType}-list__list-price`}>{info.price}</div> }
    </Link>
  </div>
);

export default Destination;
