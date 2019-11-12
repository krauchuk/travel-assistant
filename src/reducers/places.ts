import * as Actions from '../actions/actionTypes';
import * as Types from '../types';
import { PlacesActionTypes } from '../actions/actionTypes/places';

interface StateType {
  readonly places: Array<Types.place>;
  readonly popularPlaces: Array<Types.place>;
  readonly pagination: null | Types.pagination;
  readonly selectedPlace: null | Types.place;
}

const initState = {
  places: [],
  popularPlaces: [],
  pagination: null,
  selectedPlace: null,
};

export default function (state: StateType = initState, action: PlacesActionTypes): StateType {
  switch (action.type) {
    case Actions.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload.all,
        popularPlaces: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case Actions.FETCH_PLACE_SUCCESS:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
}
