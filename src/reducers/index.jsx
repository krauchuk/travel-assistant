import { combineReducers } from 'redux';
import countries from './countries';
import cities from './cities';
import places from './places';

const reducers = combineReducers({
  countries,
  cities,
  places,
});

export default reducers;
