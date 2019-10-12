import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/homePage';
import CountriesPage from '../containers/lists/countyList';
import CountryPage from '../containers/country';
import CitiesPage from '../containers/lists/cityList';
import CityPage from '../containers/city';
import PlacesPage from '../containers/lists/placeList';
import PlacePage from '../containers/place';

const router = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/country" component={CountriesPage} />
      <Route exact path="/country/:number" component={CountryPage} />
      <Route exact path="/city" component={CitiesPage} />
      <Route exact path="/city/:number" component={CityPage} />
      <Route exact path="/place" component={PlacesPage} />
      <Route exact path="/place/:number" component={PlacePage} />
    </Switch>
  </div>
);

export default router;
