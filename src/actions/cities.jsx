import axios from 'axios';
import server from '../constants/serverUrl';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  CITIES_PAGE_CHANGE,
  FILTER_CITY_PLACES_CHANGE,
} from './actionTypes';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';
import { changeCurrentPage } from './paginationActions';

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

const changePage = page => (
  (dispatch) => {
    dispatch(changeCurrentPage(CITIES_PAGE_CHANGE, page));
  }
)

const changePlacesFilter = placeTypeId => (
  (dispatch) => {
    dispatch({
      type: FILTER_CITY_PLACES_CHANGE,
      payload: placeTypeId,
    });
  }
)

export {
  fetchCities,
  fetchCity,
  changePage,
  changePlacesFilter,
}
