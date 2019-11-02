import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import List from '../../components/list';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';
import {
  fetchPlaces,
} from '../../actions/places';

class PlaceList extends PureComponent {
  componentDidMount() {
    const { lastLocation, updatePlaces } = this.props;
    const path = lastLocation ? lastLocation.pathname.split('/')[1] : null;
    if (path !== 'place') {
      updatePlaces(1);
    }
  }

  changePageFunc = (page) => {
    const { updatePlaces } = this.props;
    updatePlaces(page);
    window.scrollTo(0, 0);
  }

  render() {
    const {
      places,
      popularPlaces,
      pagination,
      loading,
      error,
    } = this.props;
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    return (
      <div>
        <List
          destinationsType="place"
          popularDestinations={popularPlaces}
          destinations={places}
          pagination={pagination}
          paginationClickHandle={this.changePageFunc}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places.places,
  popularPlaces: state.places.popularPlaces,
  pagination: state.places.pagination,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch) => ({
  updatePlaces: (page) => {
    dispatch(fetchPlaces(page));
  },
});

PlaceList.propTypes = {
  lastLocation: appPropTypes.location,
  places: appPropTypes.places.isRequired,
  popularPlaces: appPropTypes.places.isRequired,
  updatePlaces: PropTypes.func.isRequired,
  pagination: appPropTypes.pagination,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

PlaceList.defaultProps = {
  pagination: null,
  lastLocation: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(PlaceList));
