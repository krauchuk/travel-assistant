import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITY_SUCCESS,
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
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload.all,
        popularCities: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
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
