import axios from 'axios';
import server from '../constants/serverUrl';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  FILTER_CITY_PLACES_CHANGE,
} from './actionTypes';

const fetchCities = (page) => (
  (dispatch) => {
    const url = `${server}/city`;
    dispatch({ type: FETCH_CITIES_REQUEST });
    return axios.get(
      url, {
        params: {
          page,
        },
      },
    )
      .then((response) => {
        dispatch({ type: FETCH_CITIES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_CITIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCity = (id) => (
  (dispatch) => {
    const url = `${server}/city/${id}`;
    dispatch({ type: FETCH_CITY_REQUEST });
    return axios.get(url)
      .then((response) => {
        dispatch({ type: FETCH_CITY_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_CITY_FAILURE, payload: error.message });
      });
  }
);

const changePlacesFilter = (placeTypeId) => (
  (dispatch) => {
    dispatch({ type: FILTER_CITY_PLACES_CHANGE, payload: placeTypeId });
  }
);

export {
  fetchCities,
  fetchCity,
  changePlacesFilter,
};
