import City from './city';
import Country from './country';
import Place from './place';
import Pagination from './pagination';
import Location from './location';
import Match from './match';
import { AppState } from '../reducers';

export type city = City;
export type country = Country;
export type place = Place;
export type pagination = Pagination;
export type location = Location;
export type match = Match;
export type destination = City | Country | Place;
export type appState = AppState;
