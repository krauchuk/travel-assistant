import React from 'react';
import * as Types from '../../types';
import Destination from './destination';
import '../../scss/destinations.scss';

interface Props {
  destinations: Array<Types.destination>;
  destinationsType: string;
  listType: string;
  onClickHandle?: (e: React.MouseEvent) => void;
}

const Destinations: React.FC<Props> = ({
  listType,
  destinationsType,
  destinations,
  onClickHandle = () => {},
}: Props) => (
  <div className={`${listType}-list`}>
    {destinations.map((destination) => (
      <Destination
        key={destination.id}
        listType={listType}
        destinationType={destinationsType}
        destination={destination}
        onClickHandle={onClickHandle}
      />
    ))}
  </div>
);

export default Destinations;
