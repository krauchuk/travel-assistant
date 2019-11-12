import { Dispatch } from 'redux';
import apollo from '../graphql/client';
import { places, place } from '../graphql/queries/places';
import * as Actions from './actionTypes';
import * as Types from '../types';

interface DispatchProps {
  type: Actions.Types;
  payload?: string | Array<Types.place> | Types.place;
}

const fetchPlaces = (page: number) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_PLACES_REQUEST });
    return apollo.query({ query: places(page) })
      .then((response) => {
        dispatch({ type: Actions.FETCH_PLACES_SUCCESS, payload: response.data.places });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_PLACES_FAILURE, payload: error.message });
      });
  }
);

const fetchPlace = (id: string) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_PLACE_REQUEST });
    return apollo.query({ query: place(id) })
      .then((response) => {
        dispatch({ type: Actions.FETCH_PLACE_SUCCESS, payload: response.data.place });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_PLACE_FAILURE, payload: error.message });
      });
  }
);

export {
  fetchPlaces,
  fetchPlace,
};
