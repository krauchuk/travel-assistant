import * as Actions from '../actions/actionTypes';
import * as Types from '../types';
import { CitiesActionTypes } from '../actions/actionTypes/cities';

interface StateType {
  readonly cities: Array<Types.city>;
  readonly popularCities: Array<Types.city>;
  readonly pagination: null | Types.pagination;
  readonly filter: {
    readonly placeTypeId: number;
  };
  readonly selectedCity: null | Types.city;
}

const initState = {
  cities: [],
  popularCities: [],
  pagination: null,
  filter: {
    placeTypeId: 0,
  },
  selectedCity: null,
};

export default function (state: StateType = initState, action: CitiesActionTypes): StateType {
  switch (action.type) {
    case Actions.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload.all,
        popularCities: action.payload.popular,
        pagination: action.payload.pagination,
      };
    case Actions.FETCH_CITY_SUCCESS:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case Actions.FILTER_CITY_PLACES_CHANGE:
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
