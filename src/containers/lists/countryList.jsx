import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import { fetchCountries, fetchCountry } from '../../actions/countries';

const mapStateToProps = (state) => ({
  destinations: state.countries.countries,
  popularDestinations: state.countries.popularCountries,
  pagination: state.countries.pagination,
  loading: state.app.loading,
  error: state.app.error,
  destinationsType: 'country',
});

const mapDispatchToProps = (dispatch) => ({
  updateList: (page) => {
    dispatch(fetchCountries(page));
  },
  fetchById: (id) => {
    dispatch(fetchCountry(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(List));
