import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
          entityType={'country'}
          entities={popularCountries}
        />
        <span>Popular cities</span>
        <List
          entityType={'city'}
          entities={popularCities}
        />
        <span>Popular places</span>
        <List
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

export default connect(mapStateToProps)(HomePage);
