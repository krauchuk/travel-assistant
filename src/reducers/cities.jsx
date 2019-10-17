import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  FILTER_CITY_PLACES_CHANGE,
} from '../actions/actionTypes';

const initState = {
  cities: [],
  popularCities: [],
  pagination: null,
  filter: {
    placeTypeId: 0,
  },
  selectedCity: null,
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
    case FETCH_CITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload.all,
        popularCities: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case FETCH_CITIES_FAILURE:
    case FETCH_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedCity: action.payload,
      };
    case FILTER_CITY_PLACES_CHANGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          placeTypeId: action.payload,
        },
      };
    default:
      return state;
  }
}
