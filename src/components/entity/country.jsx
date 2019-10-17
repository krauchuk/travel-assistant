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
  country,
  cityClickHandle,
  goBack,
}) => (
  <div>
    <span className="entity__path">
      {`Home > ${country.name}`}
    </span>
    { country.pic ?
      <img alt="country pic" className="entity__img" src={country.pic} />
      : <NoPic type="entity" /> }
    <div className="entity__description">{country.info.description}</div>
    <div>
      { goBack && <button className="btn" onClick={goBack} type="button">Back</button> }
      { country.popularCities &&
        <Popular
          destinationsType="city"
          destinations={country.popularCities}
          onClickHandle={cityClickHandle}
        /> }
      { country.popularPlaces &&
        <Popular
          destinationsType="place"
          destinations={country.popularPlaces}
        /> }
      <Destinations
        listType="scroll"
        destinationsType="city"
        destinations={country.cities}
        onClickHandle={cityClickHandle}
      />
    </div>
  </div>
);

Country.propTypes = {
  country: appPropTypes.country.isRequired,
  cityClickHandle: PropTypes.func.isRequired,
  goBack: PropTypes.func,
};

Country.defaultProps = {
  goBack: null,
};

export default Country;
