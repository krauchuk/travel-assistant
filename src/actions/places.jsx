import axios from 'axios';
import server from '../constants/serverUrl';
import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
  FETCH_PLACE_REQUEST,
  FETCH_PLACE_SUCCESS,
  FETCH_PLACE_FAILURE,
  PLACES_PAGE_CHANGE,
} from './actionTypes';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';
import { changeCurrentPage } from './paginationActions';

const fetchPlaces = page => (
  (dispatch) => {
    const url = `${server}/place`;
    dispatch(fetchRequest(FETCH_PLACES_REQUEST));
    return axios.get(
      url, {
        params: {
          page,
        },
      },
      )
      .then((response) => {
        dispatch(fetchSuccess(FETCH_PLACES_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_PLACES_FAILURE, error.message));
      });
  }
);

const fetchPlace = id => (
  (dispatch) => {
    const url = `${server}/place/${id}`;
    dispatch(fetchRequest(FETCH_PLACE_REQUEST));
    return axios.get(url)
      .then((response) => {
        dispatch(fetchSuccess(FETCH_PLACE_SUCCESS, response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(FETCH_PLACE_FAILURE, error.message));
      });
  }
);

const changePage = page => (
  (dispatch) => {
    dispatch(changeCurrentPage(PLACES_PAGE_CHANGE, page));
  }
)

export {
  fetchPlaces,
  fetchPlace,
  changePage,
}
