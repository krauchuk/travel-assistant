import * as Actions from './index';
import * as Types from '../../types';

export interface FetchPlacesSuccess {
  type: typeof Actions.FETCH_PLACES_SUCCESS;
  payload: {
    all: Array<Types.place>;
    popular: Array<Types.place>;
    pagination: Types.pagination;
  };
}

export interface FetchPlaceSuccess {
  type: typeof Actions.FETCH_PLACE_SUCCESS;
  payload: Types.place;
}

export type PlacesActionTypes = FetchPlacesSuccess | FetchPlaceSuccess;
