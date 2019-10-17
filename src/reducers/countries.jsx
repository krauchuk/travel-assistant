import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from '../actions/actionTypes';

const initState = {
  countries: [],
  popularCountries: [],
  pagination: null,
  selectedCountry: null,
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload.all,
        popularCountries: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case FETCH_COUNTRIES_FAILURE:
    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
}
