import { Dispatch } from 'redux';
import apollo from '../graphql/client';
import { countries, country } from '../graphql/queries/countries';
import * as Actions from './actionTypes';
import * as Types from '../types';

interface DispatchProps {
  type: Actions.Types;
  payload?: string | Array<Types.country> | Types.country;
}

const fetchCountries = (page: number) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_COUNTRIES_REQUEST });
    return apollo.query({ query: countries(page) })
      .then((response) => {
        dispatch({ type: Actions.FETCH_COUNTRIES_SUCCESS, payload: response.data.countries });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_COUNTRIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCountry = (id: string) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_COUNTRY_REQUEST });
    return apollo.query({ query: country(id) })
      .then((response) => {
        dispatch({ type: Actions.FETCH_COUNTRY_SUCCESS, payload: response.data.country });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_COUNTRY_FAILURE, payload: error.message });
      });
  }
);

export {
  fetchCountries,
  fetchCountry,
};
