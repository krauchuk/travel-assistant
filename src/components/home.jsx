import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../propTypes';
import HomeGrid from './homeGrid';
import Loading from './common/loading';
import Error from './common/error';

const Home = ({
  popularCountries,
  popularCities,
  popularPlaces,
  loading,
  error,
  fetchCountryById,
  fetchCityById,
}) => {
  const countryClickHandle = (e) => { fetchCountryById(e.currentTarget.id); };
  const cityClickHandle = (e) => { fetchCityById(e.currentTarget.id); };
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <HomeGrid
      countries={popularCountries}
      cities={popularCities}
      places={popularPlaces}
      countryClickHandle={countryClickHandle}
      cityClickHandle={cityClickHandle}
    />
  );
};

Home.propTypes = {
  popularCountries: appPropTypes.countries.isRequired,
  popularCities: appPropTypes.cities.isRequired,
  popularPlaces: appPropTypes.places.isRequired,
  fetchCountryById: PropTypes.func.isRequired,
  fetchCityById: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Home.defaultProps = {
  error: null,
};

export default Home;
