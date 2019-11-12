import { combineReducers } from 'redux';
import countries from './countries';
import cities from './cities';
import places from './places';
import app from './app';

const reducers = combineReducers({
  countries,
  cities,
  places,
  app,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
