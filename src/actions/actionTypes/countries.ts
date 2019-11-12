import * as Actions from './index';
import * as Types from '../../types';

export interface FetchCountriesSuccess {
  type: typeof Actions.FETCH_COUNTRIES_SUCCESS;
  payload: {
    all: Array<Types.country>;
    popular: Array<Types.country>;
    pagination: Types.pagination;
  };
}

export interface FetchCountrySuccess {
  type: typeof Actions.FETCH_COUNTRY_SUCCESS;
  payload: Types.country;
}

export type CountriesActionTypes = FetchCountriesSuccess | FetchCountrySuccess;
