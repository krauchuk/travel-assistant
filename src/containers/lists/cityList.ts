import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import { fetchCities, fetchCity } from '../../actions/cities';
import * as Types from '../../types';

const mapStateToProps = (state: Types.appState) => ({
  destinations: state.cities.cities,
  popularDestinations: state.cities.popularCities,
  pagination: state.cities.pagination,
  loading: state.app.loading,
  error: state.app.error,
  destinationsType: 'city',
});

const mapDispatchToProps = (dispatch: any): any => ({
  updateList: (page: number) => {
    dispatch(fetchCities(page));
  },
  fetchById: (id: string) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(List));
