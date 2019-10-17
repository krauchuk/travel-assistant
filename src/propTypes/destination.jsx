import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  info: PropTypes.shape({
    address: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
});
