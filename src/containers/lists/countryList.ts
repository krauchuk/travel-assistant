import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import { fetchCountries, fetchCountry } from '../../actions/countries';
import * as Types from '../../types';

const mapStateToProps = (state: Types.appState) => ({
  destinations: state.countries.countries,
  popularDestinations: state.countries.popularCountries,
  pagination: state.countries.pagination,
  loading: state.app.loading,
  error: state.app.error,
  destinationsType: 'country',
});

const mapDispatchToProps = (dispatch: any): any => ({
  updateList: (page: number) => {
    dispatch(fetchCountries(page));
  },
  fetchById: (id: string) => {
    dispatch(fetchCountry(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(List));
