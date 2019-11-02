import apollo from '../graphql/client';
import { countries, country } from '../graphql/queries/countries';
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
    dispatch({ type: FETCH_COUNTRIES_REQUEST });
    return apollo.query({ query: countries(page) })
      .then((response) => {
        dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: response.data.countries });
      })
      .catch((error) => {
        dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCountry = (id) => (
  (dispatch) => {
    dispatch({ type: FETCH_COUNTRY_REQUEST });
    return apollo.query({ query: country(id) })
      .then((response) => {
        dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: response.data.country });
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
