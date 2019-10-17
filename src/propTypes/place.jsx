import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  typeId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  info: PropTypes.shape({
    description: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});
