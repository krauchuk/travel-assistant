import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '../components/list';

class HomePage extends PureComponent {
  render() {
    const {
      popularCountries,
      popularCities,
      popularPlaces,
    } = this.props;
    return (
      <div>
        <span>Popular countries</span>
        <List
          listType={'grid'}
          entityType={'country'}
          entities={popularCountries}
        />
        <Link to="/country">More</Link>
        <span>Popular cities</span>
        <List
          listType={'grid'}
          entityType={'city'}
          entities={popularCities}
        />
        <Link to="/city">More</Link>
        <span>Popular places</span>
        <List
          listType={'grid'}
          entityType={'place'}
          entities={popularPlaces}
        />
        <Link to="/place">More</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
});

export default connect(mapStateToProps)(HomePage);
