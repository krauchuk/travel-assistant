import { Dispatch } from 'redux';
import apollo from '../graphql/client';
import { cities, city } from '../graphql/queries/cities';
import * as Actions from './actionTypes';
import * as Types from '../types';

interface DispatchProps {
  type: Actions.Types;
  payload?: string | number | Array<Types.city> | Types.city;
}

const fetchCities = (page: number) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_CITIES_REQUEST });
    return apollo.query({
      query: cities(page),
    })
      .then((response) => {
        dispatch({ type: Actions.FETCH_CITIES_SUCCESS, payload: response.data.cities });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_CITIES_FAILURE, payload: error.message });
      });
  }
);

const fetchCity = (id: string) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FETCH_CITY_REQUEST });
    return apollo.query({ query: city(id) })
      .then((response) => {
        dispatch({ type: Actions.FETCH_CITY_SUCCESS, payload: response.data.city });
      })
      .catch((error) => {
        dispatch({ type: Actions.FETCH_CITY_FAILURE, payload: error.message });
      });
  }
);

const changePlacesFilter = (placeTypeId: number) => (
  (dispatch: Dispatch<DispatchProps>) => {
    dispatch({ type: Actions.FILTER_CITY_PLACES_CHANGE, payload: placeTypeId });
  }
);

export {
  fetchCities,
  fetchCity,
  changePlacesFilter,
};
