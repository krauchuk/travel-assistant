import React from 'react';
import * as Types from '../types';
import HomeGrid from './homeGrid';
import Loading from './common/loading';
import Error from './common/error';

interface Props {
  popularCountries: Array<Types.country>;
  popularCities: Array<Types.city>;
  popularPlaces: Array<Types.place>;
  fetchCountryById: (id: string) => void;
  fetchCityById: (id: string) => void;
  loading: boolean;
  error?: string;
}

const Home: React.FC<Props> = ({
  popularCountries,
  popularCities,
  popularPlaces,
  loading,
  error,
  fetchCountryById,
  fetchCityById,
}: Props) => {
  const countryClickHandle = (e: React.MouseEvent) => { fetchCountryById(e.currentTarget.id); };
  const cityClickHandle = (e: React.MouseEvent) => { fetchCityById(e.currentTarget.id); };
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <HomeGrid
      countries={popularCountries}
      cities={popularCities}
      places={popularPlaces}
      countryClickHandle={countryClickHandle}
      cityClickHandle={cityClickHandle}
    />
  );
};

export default Home;
