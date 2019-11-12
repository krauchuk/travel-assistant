import * as Actions from '../actions/actionTypes';

interface StateType {
  readonly loading: boolean;
  readonly error: string | null;
}

interface ActionType {
  type: Actions.Types;
  payload: string;
}

const initState = {
  loading: false,
  error: null,
};

export default function (state: StateType = initState, action: ActionType): StateType {
  switch (action.type) {
    case Actions.FETCH_COUNTRIES_REQUEST:
    case Actions.FETCH_COUNTRY_REQUEST:
    case Actions.FETCH_CITIES_REQUEST:
    case Actions.FETCH_CITY_REQUEST:
    case Actions.FETCH_PLACES_REQUEST:
    case Actions.FETCH_PLACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Actions.FETCH_COUNTRIES_SUCCESS:
    case Actions.FETCH_COUNTRY_SUCCESS:
    case Actions.FETCH_CITIES_SUCCESS:
    case Actions.FETCH_CITY_SUCCESS:
    case Actions.FETCH_PLACES_SUCCESS:
    case Actions.FETCH_PLACE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Actions.FETCH_COUNTRIES_FAILURE:
    case Actions.FETCH_COUNTRY_FAILURE:
    case Actions.FETCH_CITIES_FAILURE:
    case Actions.FETCH_CITY_FAILURE:
    case Actions.FETCH_PLACES_FAILURE:
    case Actions.FETCH_PLACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
