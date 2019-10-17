import PropTypes from 'prop-types';

export default PropTypes.shape({
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
});
