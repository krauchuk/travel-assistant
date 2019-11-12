import * as Actions from '../actions/actionTypes';
import * as Types from '../types';
import { CountriesActionTypes } from '../actions/actionTypes/countries';

interface StateType {
  readonly countries: Array<Types.country>;
  readonly popularCountries: Array<Types.country>;
  readonly pagination: null | Types.pagination;
  readonly selectedCountry: null | Types.country;
}

const initState = {
  countries: [],
  popularCountries: [],
  pagination: null,
  selectedCountry: null,
};

export default function (state: StateType = initState, action: CountriesActionTypes): StateType {
  switch (action.type) {
    case Actions.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload.all,
        popularCountries: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case Actions.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
}
