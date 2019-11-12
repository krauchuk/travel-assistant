import * as Actions from './index';
import * as Types from '../../types';

export interface FetchCitiesSuccess {
  type: typeof Actions.FETCH_CITIES_SUCCESS;
  payload: {
    all: Array<Types.city>;
    popular: Array<Types.city>;
    pagination: Types.pagination;
  };
}

export interface FetchCitySuccess {
  type: typeof Actions.FETCH_CITY_SUCCESS;
  payload: Types.city;
}

export interface FilterCityPlacesChange {
  type: typeof Actions.FILTER_CITY_PLACES_CHANGE;
  payload: number;
}

export type CitiesActionTypes = FetchCitiesSuccess |
  FetchCitySuccess |
  FilterCityPlacesChange;
