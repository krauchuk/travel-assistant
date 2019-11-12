import React from 'react';
import * as Types from '../types';
import Destinations from './destinations/index';
import Popular from './destinations/popular';
import Pagination from './common/pagination';

interface Props {
  destinationsType: string;
  destinations: Array<Types.destination>;
  popularDestinations: Array<Types.destination>;
  pagination?: Types.pagination;
  destinationClickHandle: (e: React.MouseEvent) => void;
  paginationClickHandle: (page: number) => void;
}

const List: React.FC<Props> = ({
  destinationsType,
  popularDestinations,
  destinations,
  pagination,
  destinationClickHandle = () => {},
  paginationClickHandle,
}: Props) => (
  <div>
    { !!popularDestinations.length &&
      <Popular
        destinationsType={destinationsType}
        destinations={popularDestinations}
        onClickHandle={destinationClickHandle}
      />}
    <Destinations
      listType="scroll"
      destinationsType={destinationsType}
      destinations={destinations}
      onClickHandle={destinationClickHandle}
    />
    { pagination &&
      <Pagination
        values={pagination || undefined}
        clickHandle={paginationClickHandle}
      />}
  </div>
);

export default List;
