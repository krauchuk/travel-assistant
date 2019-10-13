import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_PLACE_REQUEST,
  FETCH_PLACE_SUCCESS,
  FETCH_PLACE_FAILURE,
  PLACES_PAGE_CHANGE,
} from '../actions/actionTypes';

const initState = {
  places: [],
  popularPlaces: [],
  pagination: {
    currentPage: 1,
    hasNext: false,
    hasPrev: false,
  },
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
        pagination: {
          currentPage: action.payload.pagination.currentPage,
          hasNext: action.payload.pagination.hasNext,
          hasPrev: action.payload.pagination.hasPrev,
        },
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
    case PLACES_PAGE_CHANGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    default:
      return state;
  }
};
