import React from 'react';
import { Link } from 'react-router-dom';
import * as Types from '../types';
import Popular from './destinations/popular';
import '../scss/buttons.scss';

interface Props {
  countries: Array<Types.country>;
  cities: Array<Types.city>;
  places: Array<Types.place>;
  countryClickHandle: (e: React.MouseEvent) => void;
  cityClickHandle: (e: React.MouseEvent) => void;
}

const HomeGrid: React.FC<Props> = ({
  countries,
  cities,
  places,
  countryClickHandle,
  cityClickHandle,
}: Props) => (
  <div>
    { !!countries.length &&
      <div>
        <Link to="/country" className="more-btn">More</Link>
        <Popular
          destinationsType="country"
          destinations={countries}
          onClickHandle={countryClickHandle}
        />
      </div>}
    { !!cities.length &&
      <div>
        <Link to="/city" className="more-btn">More</Link>
        <Popular
          destinationsType="city"
          destinations={cities}
          onClickHandle={cityClickHandle}
        />
      </div>}
    { !!places.length &&
      <div>
        <Link to="/place" className="more-btn">More</Link>
        <Popular
          destinationsType="place"
          destinations={places}
        />
      </div>}
  </div>
);

export default HomeGrid;
