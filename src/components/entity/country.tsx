import React from 'react';
import * as Types from '../../types';
import NoPic from '../common/noPic';
import Destinations from '../destinations';
import Popular from '../destinations/popular';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

interface Props {
  country: Types.country;
  cityClickHandle: (e: React.MouseEvent) => void;
  backFunc: () => void;
  canBack: boolean;
}

const Country: React.FC<Props> = ({
  country: {
    name,
    pic,
    info: {
      description,
    },
    cities,
    popularCities,
    popularPlaces,
  },
  cityClickHandle,
  backFunc,
  canBack,
}: Props) => (
  <div>
    <span className="entity__path">
      {`Home > ${name}`}
    </span>
    { pic ?
      <img alt="country pic" className="entity__img" src={pic} />
      : <NoPic type="entity" /> }
    <div className="entity__description">{description}</div>
    <div>
      { canBack && <button className="btn" onClick={backFunc} type="button">Back</button> }
      { popularCities &&
        <Popular
          destinationsType="city"
          destinations={popularCities}
          onClickHandle={cityClickHandle}
        /> }
      { popularPlaces &&
        <Popular
          destinationsType="place"
          destinations={popularPlaces}
        /> }
      <Destinations
        listType="scroll"
        destinationsType="city"
        destinations={cities}
        onClickHandle={cityClickHandle}
      />
    </div>
  </div>
);

export default Country;
