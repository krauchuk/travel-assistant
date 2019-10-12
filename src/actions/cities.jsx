import axios from 'axios';
import server from './server';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from './actionTypes';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';

const fetchCities = page => (
  (dispatch) => {
    const url = `${server}/city`;
    dispatch(fetchRequest(FETCH_CITIES_REQUEST));
    return axios.get(
      url,{
        params: {
          page,
        },
      },
      )
      .then((response) => {
        dispatch(fetchSuccess(FETCH_CITIES_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_CITIES_FAILURE, error.message));
      });
  }
);

const fetchCity = id => (
  (dispatch) => {
    const url = `${server}/city/${id}`;
    dispatch(fetchRequest(FETCH_CITY_REQUEST));
    return axios.get(url)
      .then((response) => {
        dispatch(fetchSuccess(FETCH_CITY_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_CITY_FAILURE, error.message));
      });
  }
);

export {
  fetchCities,
  fetchCity,
}
