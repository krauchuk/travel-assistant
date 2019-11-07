import { connect } from 'react-redux';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import Home from '../components/home';

const mapStateToProps = (state) => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
