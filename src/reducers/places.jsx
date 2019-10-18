import {
  FETCH_PLACES_SUCCESS,
  FETCH_PLACE_SUCCESS,
} from '../actions/actionTypes';

const initState = {
  places: [],
  popularPlaces: [],
  pagination: null,
  selectedPlace: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload.all,
        popularPlaces: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case FETCH_PLACE_SUCCESS:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
}
