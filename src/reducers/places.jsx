import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_PLACE_REQUEST,
  FETCH_PLACE_SUCCESS,
  FETCH_PLACE_FAILURE,
} from '../actions/actionTypes';

const initState = {
  places: [],
  popularPlaces: [],
  selectedPlace: null,
  loading: false,
  error: null,
};

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_PLACES_REQUEST:
    case FETCH_PLACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        places: action.payload.all,
        popularPlaces: action.payload.popular,
      };
    case FETCH_PLACES_FAILURE:
    case FETCH_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case FETCH_PLACE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
};
