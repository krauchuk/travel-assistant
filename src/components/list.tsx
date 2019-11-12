import React, { PureComponent } from 'react';
import { WithLastLocationProps } from 'react-router-last-location';
import * as Types from '../types';
import DestinationList from './destinationList';
import Loading from './common/loading';
import Error from './common/error';

interface Props extends WithLastLocationProps {
  destinationsType: string;
  fetchById?: (id: string) => void;
  updateList: (page: number) => void;
  destinations: Array<Types.destination>;
  popularDestinations: Array<Types.destination>;
  pagination?: Types.pagination;
  loading?: boolean;
  error?: string;
}

class List extends PureComponent<Props> {
  componentDidMount() {
    const { lastLocation, updateList, destinationsType } = this.props;
    const path = lastLocation && lastLocation.pathname.split('/')[1];
    if (path !== destinationsType) {
      updateList(1);
    }
  }

  changePageFunc = (page: number) => {
    const { updateList } = this.props;
    updateList(page);
    window.scrollTo(0, 0);
  };

  destinationClickHandle = (e: React.MouseEvent) => {
    const { fetchById } = this.props;
    if (fetchById) {
      fetchById(e.currentTarget.id);
    }
  };

  render() {
    const {
      destinationsType,
      destinations,
      popularDestinations,
      pagination,
      loading,
      error,
    } = this.props;
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    return (
      <DestinationList
        destinationsType={destinationsType}
        popularDestinations={popularDestinations}
        destinations={destinations}
        pagination={pagination}
        destinationClickHandle={this.destinationClickHandle}
        paginationClickHandle={this.changePageFunc}
      />
    );
  }
}

export default List;
