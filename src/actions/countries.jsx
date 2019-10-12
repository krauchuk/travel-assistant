import axios from 'axios';
import server from './server';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from './actionTypes';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';

const fetchCountries = page => (
  (dispatch) => {
    const url = `${server}/country`;
    dispatch(fetchRequest(FETCH_COUNTRIES_REQUEST));
    return axios.get(
      url, {
        params: {
          page,
        },
      },
      )
      .then((response) => {
        dispatch(fetchSuccess(FETCH_COUNTRIES_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_COUNTRIES_FAILURE, error.message));
      });
  }
);

const fetchCountry = id => (
  (dispatch) => {
    const url = `${server}/country/${id}`;
    dispatch(fetchRequest(FETCH_COUNTRY_REQUEST));
    return axios.get(url)
      .then((response) => {
        dispatch(fetchSuccess(FETCH_COUNTRY_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_COUNTRY_FAILURE, error.message));
      });
  }
);

export {
  fetchCountries,
  fetchCountry,
}
