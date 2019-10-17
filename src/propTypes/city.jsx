import PropTypes from 'prop-types';
import placePropType from './place';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  info: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  places: PropTypes.arrayOf(placePropType),
  placesTypes: PropTypes.array,
  popularPlaces: PropTypes.arrayOf(placePropType),
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});
