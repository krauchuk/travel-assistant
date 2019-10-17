import PropTypes from 'prop-types';
import country from './country';
import city from './city';
import place from './place';
import destination from './destination';
import pagination from './pagination';
import location from './location';

export default {
  country,
  countries: PropTypes.arrayOf(country),
  city,
  cities: PropTypes.arrayOf(city),
  place,
  places: PropTypes.arrayOf(place),
  destination,
  destinations: PropTypes.arrayOf(destination),
  pagination,
  location,
};
