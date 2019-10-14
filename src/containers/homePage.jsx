import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import PopularGrid from '../components/popularGrid';
import '../scss/text.scss';
import '../scss/buttons.scss';

class HomePage extends PureComponent {
  countryClickHandle = (e) => {
    const { fetchCountryById } =this.props;
    fetchCountryById(e.currentTarget.id);
  }

  cityClickHandle = (e) => {
    const { fetchCityById } =this.props;
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
        <PopularGrid
          entityType={'country'}
          entities={popularCountries}
          onClickHandle={this.countryClickHandle}
        />
        <Link to="/city" className="more-btn">More</Link>
        <PopularGrid
          entityType={'city'}
          entities={popularCities}
          onClickHandle={this.cityClickHandle}
        />
        <Link to="/place" className="more-btn">More</Link>
        <PopularGrid
          entityType={'place'}
          entities={popularPlaces}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
});

const mapDispatchToProps = dispatch => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
