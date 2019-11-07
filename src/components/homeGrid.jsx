import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import appPropTypes from '../propTypes';
import Popular from './destinations/popular';
import '../scss/buttons.scss';

const HomeGrid = ({
  countries,
  cities,
  places,
  countryClickHandle,
  cityClickHandle,
}) => (
  <div>
    { !!countries.length &&
      <div>
        <Link to="/country" className="more-btn">More</Link>
        <Popular
          destinationsType="country"
          destinations={countries}
          onClickHandle={countryClickHandle}
        />
      </div>}
    { !!cities.length &&
      <div>
        <Link to="/city" className="more-btn">More</Link>
        <Popular
          destinationsType="city"
          destinations={cities}
          onClickHandle={cityClickHandle}
        />
      </div>}
    { !!places.length &&
      <div>
        <Link to="/place" className="more-btn">More</Link>
        <Popular
          destinationsType="place"
          destinations={places}
        />
      </div>}
  </div>
);

HomeGrid.propTypes = {
  countries: appPropTypes.countries.isRequired,
  cities: appPropTypes.cities.isRequired,
  places: appPropTypes.places.isRequired,
  countryClickHandle: PropTypes.func.isRequired,
  cityClickHandle: PropTypes.func.isRequired,
};

export default HomeGrid;
