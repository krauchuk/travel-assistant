import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';
import '../../scss/text.scss';

class CityList extends PureComponent {
  render() {
    const { cities, popularCities } = this.props;
    const type = 'city';
    return (
      <div>
        <span className="header-text">Popular</span>
        <List
          listType={'grid'}
          entityType={type}
          entities={popularCities}
        />
        <List
          listType={'scroll'}
          entityType={type}
          entities={cities}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cities: state.cities.cities,
  popularCities: state.cities.popularCities,
});

export default connect(mapStateToProps)(CityList);
