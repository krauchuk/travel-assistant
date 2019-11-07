import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import { fetchPlaces } from '../../actions/places';

const mapStateToProps = (state) => ({
  destinations: state.places.places,
  popularDestinations: state.places.popularPlaces,
  pagination: state.places.pagination,
  loading: state.app.loading,
  error: state.app.error,
  destinationsType: 'place',
});

const mapDispatchToProps = (dispatch) => ({
  updateList: (page) => {
    dispatch(fetchPlaces(page));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(List));
