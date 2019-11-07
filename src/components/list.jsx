import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DestinationList from './destinationList';
import Loading from './common/loading';
import Error from './common/error';
import appPropTypes from '../propTypes';


class List extends PureComponent {
  componentDidMount() {
    const { lastLocation, updateList, destinationsType } = this.props;
    const path = lastLocation && lastLocation.pathname.split('/')[1];
    if (path !== destinationsType) {
      updateList(1);
    }
  }

  changePageFunc = (page) => {
    const { updateList } = this.props;
    updateList(page);
    window.scrollTo(0, 0);
  }

  destinationClickHandle = (e) => {
    const { fetchById } = this.props;
    if (fetchById) {
      fetchById(e.currentTarget.id);
    }
  }

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

List.propTypes = {
  destinationsType: PropTypes.string.isRequired,
  lastLocation: appPropTypes.location,
  fetchById: PropTypes.func,
  updateList: PropTypes.func.isRequired,
  destinations: appPropTypes.allPlural.isRequired,
  popularDestinations: appPropTypes.allPlural.isRequired,
  pagination: appPropTypes.pagination,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

List.defaultProps = {
  fetchById: null,
  pagination: null,
  lastLocation: null,
  error: null,
};

export default List;
