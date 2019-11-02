import apollo from '../graphql/client';
import { places, place } from '../graphql/queries/places';
import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_PLACE_REQUEST,
  FETCH_PLACE_SUCCESS,
  FETCH_PLACE_FAILURE,
} from './actionTypes';

const fetchPlaces = (page) => (
  (dispatch) => {
    dispatch({ type: FETCH_PLACES_REQUEST });
    return apollo.query({ query: places(page) })
      .then((response) => {
        dispatch({ type: FETCH_PLACES_SUCCESS, payload: response.data.places });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PLACES_FAILURE, payload: error.message });
      });
  }
);

const fetchPlace = (id) => (
  (dispatch) => {
    dispatch({ type: FETCH_PLACE_REQUEST });
    return apollo.query({ query: place(id) })
      .then((response) => {
        dispatch({ type: FETCH_PLACE_SUCCESS, payload: response.data.place });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PLACE_FAILURE, payload: error.message });
      });
  }
);

export {
  fetchPlaces,
  fetchPlace,
};
