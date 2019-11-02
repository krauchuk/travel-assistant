import PropTypes from 'prop-types';
import cityPropType from './city';
import placePropType from './place';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  info: PropTypes.shape({
    description: PropTypes.string,
  }),
  cities: PropTypes.arrayOf(cityPropType),
  popularCities: PropTypes.arrayOf(cityPropType),
  popularPlaces: PropTypes.arrayOf(placePropType),
});
