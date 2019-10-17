import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import appPropTypes from '../propTypes';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import Popular from '../components/destinations/popular';
import '../scss/buttons.scss';

class HomePage extends PureComponent {
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
    } = this.props;
    return (
      <div>
        <Link to="/country" className="more-btn">More</Link>
        <Popular
          destinationsType="country"
          destinations={popularCountries}
          onClickHandle={this.countryClickHandle}
        />
        <Link to="/city" className="more-btn">More</Link>
        <Popular
          destinationsType="city"
          destinations={popularCities}
          onClickHandle={this.cityClickHandle}
        />
        <Link to="/place" className="more-btn">More</Link>
        <Popular
          destinationsType="place"
          destinations={popularPlaces}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

HomePage.propTypes = {
  fetchCountryById: PropTypes.func.isRequired,
  fetchCityById: PropTypes.func.isRequired,
  popularCountries: appPropTypes.countries.isRequired,
  popularCities: appPropTypes.cities.isRequired,
  popularPlaces: appPropTypes.places.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
