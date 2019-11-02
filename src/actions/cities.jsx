import apollo from '../graphql/client';
import { cities, city } from '../graphql/queries/cities';
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
    dispatch({ type: FETCH_CITIES_REQUEST });
    return apollo.query({
      query: cities(page),
    })
      .then((response) => {
        dispatch({ type: FETCH_CITIES_SUCCESS, payload: response.data.cities });
      })
      .catch((error) => {
        dispatch({ type: FETCH_CITIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCity = (id) => (
  (dispatch) => {
    dispatch({ type: FETCH_CITY_REQUEST });
    return apollo.query({ query: city(id) })
      .then((response) => {
        dispatch({ type: FETCH_CITY_SUCCESS, payload: response.data.city });
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
