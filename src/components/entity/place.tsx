import React from 'react';
import * as Types from '../../types';
import NoPic from '../common/noPic';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

interface Props {
  place: Types.place;
  backFunc: () => void;
  canBack: boolean;
}

const Place: React.FC<Props> = ({
  place: {
    name,
    pic,
    info: {
      address,
      description,
      price,
    },
    type,
    stars,
    country,
    city,
  },
  backFunc,
  canBack,
}: Props) => (
  <div>
    <span className="entity__path">
      {`Home > ${country.name} > ${city.name} > ${name}`}
    </span>
    { pic ?
      <img alt="place img" className="entity__img" src={pic} />
      : <NoPic type="entity" /> }
    <div className="entity__info">
      <div className="entity__name">{name}</div>
      <div className="entity__address">{address}</div>
      <span className="entity__type">{type}</span>
      <div className="entity__stars">
        &#9733;
        {stars}
      </div>
      <div className="entity__description">{description}</div>
      <div className="entity__price">{price}</div>
      { canBack && <button className="btn" onClick={backFunc} type="button">Back</button> }
    </div>
  </div>
);

export default Place;
