import axios from 'axios';
import server from '../constants/serverUrl';
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
    const url = `${server}/place`;
    dispatch({ type: FETCH_PLACES_REQUEST });
    return axios.get(
      url, {
        params: {
          page,
        },
      },
    )
      .then((response) => {
        dispatch({ type: FETCH_PLACES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PLACES_FAILURE, payload: error.message });
      });
  }
);

const fetchPlace = (id) => (
  (dispatch) => {
    const url = `${server}/place/${id}`;
    dispatch({ type: FETCH_PLACE_REQUEST });
    return axios.get(url)
      .then((response) => {
        dispatch({ type: FETCH_PLACE_SUCCESS, payload: response.data });
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
