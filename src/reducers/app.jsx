import * as actionType from '../actions/actionTypes';

const initState = {
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case actionType.FETCH_COUNTRIES_REQUEST:
    case actionType.FETCH_COUNTRY_REQUEST:
    case actionType.FETCH_CITIES_REQUEST:
    case actionType.FETCH_CITY_REQUEST:
    case actionType.FETCH_PLACES_REQUEST:
    case actionType.FETCH_PLACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.FETCH_COUNTRIES_SUCCESS:
    case actionType.FETCH_COUNTRY_SUCCESS:
    case actionType.FETCH_CITIES_SUCCESS:
    case actionType.FETCH_CITY_SUCCESS:
    case actionType.FETCH_PLACES_SUCCESS:
    case actionType.FETCH_PLACE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionType.FETCH_COUNTRIES_FAILURE:
    case actionType.FETCH_COUNTRY_FAILURE:
    case actionType.FETCH_CITIES_FAILURE:
    case actionType.FETCH_CITY_FAILURE:
    case actionType.FETCH_PLACES_FAILURE:
    case actionType.FETCH_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
