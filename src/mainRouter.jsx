import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/homePage';
import CountriesPage from './containers/lists/countryList';
import CountryPage from './containers/entity/country';
import CitiesPage from './containers/lists/cityList';
import CityPage from './containers/entity/city';
import PlacesPage from './containers/lists/placeList';
import PlacePage from './containers/entity/place';

const Router = () => (
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

export default Router;
