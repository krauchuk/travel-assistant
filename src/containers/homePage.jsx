import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import List from '../components/list';
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
        <span className="header-text">
          Country <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/country" className="more-btn">More</Link>
        <List
          listType={'grid'}
          entityType={'country'}
          entities={popularCountries}
          onClickHandle={this.countryClickHandle}
        />
        <span className="header-text">
          City <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/city" className="more-btn">More</Link>
        <List
          listType={'grid'}
          entityType={'city'}
          entities={popularCities}
          onClickHandle={this.cityClickHandle}
        />
        <span className="header-text">
          Place <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/place" className="more-btn">More</Link>
        <List
          listType={'grid'}
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
