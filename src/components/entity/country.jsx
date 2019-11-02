import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import NoPic from '../common/noPic';
import Destinations from '../destinations';
import Popular from '../destinations/popular';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const Country = ({
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
}) => (
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

Country.propTypes = {
  country: appPropTypes.country.isRequired,
  cityClickHandle: PropTypes.func.isRequired,
  backFunc: PropTypes.func.isRequired,
  canBack: PropTypes.bool.isRequired,
};

export default Country;
