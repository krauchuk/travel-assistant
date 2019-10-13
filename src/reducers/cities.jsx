import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  CITIES_PAGE_CHANGE,
  FILTER_CITY_PLACES_CHANGE,
} from '../actions/actionTypes';

const initState = {
  cities: [],
  popularCities: [],
  pagination: {
    currentPage: 1,
    hasNext: false,
    hasPrev: false,
  },
  filter: {
    placeTypeId: 0,
  },
  selectedCity: null,
  loading: false,
  error: null,
};

export default function(state = initState, action) {
  switch(action.type) {
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
        pagination: {
          currentPage: action.payload.pagination.currentPage,
          hasNext: action.payload.pagination.hasNext,
          hasPrev: action.payload.pagination.hasPrev,
        },
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
    case CITIES_PAGE_CHANGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
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
};
