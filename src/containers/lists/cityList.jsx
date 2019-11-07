import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import { fetchCities, fetchCity } from '../../actions/cities';

const mapStateToProps = (state) => ({
  destinations: state.cities.cities,
  popularDestinations: state.cities.popularCities,
  pagination: state.cities.pagination,
  loading: state.app.loading,
  error: state.app.error,
  destinationsType: 'city',
});

const mapDispatchToProps = (dispatch) => ({
  updateList: (page) => {
    dispatch(fetchCities(page));
  },
  fetchById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(List));
