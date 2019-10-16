import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import MainRouter from '../components/system/MainRouter';
import Navigation from '../components/navigation';
import { fetchCountries } from '../actions/countries';
import { fetchCities } from '../actions/cities';
import { fetchPlaces } from '../actions/places';
import '../scss/app.scss';

class App extends PureComponent {
  componentDidMount() {
    const { fetchAllData } = this.props;
    fetchAllData(1);
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <MainRouter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllData: (page) => {
    dispatch(fetchCountries(page));
    dispatch(fetchCities(page));
    dispatch(fetchPlaces(page));
  },
});

export default connect(null, mapDispatchToProps)(App);
