import axios from 'axios';
import server from '../constants/serverUrl';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from './actionTypes';

const fetchCountries = (page) => (
  (dispatch) => {
    const url = `${server}/country`;
    dispatch({ type: FETCH_COUNTRIES_REQUEST });
    return axios.get(
      url, {
        params: {
          page,
        },
      },
    )
      .then((response) => {
        dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCountry = (id) => (
  (dispatch) => {
    const url = `${server}/country/${id}`;
    dispatch({ type: FETCH_COUNTRY_REQUEST });
    return axios.get(url)
      .then((response) => {
        dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_COUNTRY_FAILURE, payload: error.message });
      });
  }
);

export {
  fetchCountries,
  fetchCountry,
};
