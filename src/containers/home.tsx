import { connect } from 'react-redux';
import * as Types from '../types';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import Home from '../components/home';

const mapStateToProps = (state: Types.appState) => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch: any): any => ({
  fetchCountryById: (id: string) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id: string) => {
    dispatch(fetchCity(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
