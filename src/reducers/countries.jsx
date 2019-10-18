import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRY_SUCCESS,
} from '../actions/actionTypes';

const initState = {
  countries: [],
  popularCountries: [],
  pagination: null,
  selectedCountry: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload.all,
        popularCountries: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
}
