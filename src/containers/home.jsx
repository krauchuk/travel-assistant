import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appPropTypes from '../propTypes';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import HomeGrid from '../components/homeGrid';
import Error from '../components/common/error';
import Loading from '../components/common/loading';
import '../scss/buttons.scss';

class Home extends PureComponent {
  countryClickHandle = (e) => {
    const { fetchCountryById } = this.props;
    fetchCountryById(e.currentTarget.id);
  }

  cityClickHandle = (e) => {
    const { fetchCityById } = this.props;
    fetchCityById(e.currentTarget.id);
  }

  render() {
    const {
      popularCountries,
      popularCities,
      popularPlaces,
      loading,
      error,
    } = this.props;
    if (loading) return <Loading />;
    if (error) return <Error message={error} goBack={this.toPreviousPage} />;
    return (
      <div>
        <HomeGrid
          countries={popularCountries}
          cities={popularCities}
          places={popularPlaces}
          countryClickHandle={this.countryClickHandle}
          cityClickHandle={this.cityClickHandle}
        />
      </div>
    );
  }
}

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

Home.propTypes = {
  fetchCountryById: PropTypes.func.isRequired,
  fetchCityById: PropTypes.func.isRequired,
  popularCountries: appPropTypes.countries.isRequired,
  popularCities: appPropTypes.cities.isRequired,
  popularPlaces: appPropTypes.places.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Home.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
