import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import Destinations from '../../components/destinations';
import Pagination from '../../components/common/pagination';
import Popular from '../../components/destinations/popular';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';
import {
  fetchPlaces,
} from '../../actions/places';
import '../../scss/text.scss';

class PlaceList extends PureComponent {
  componentDidMount() {
    const { lastLocation, updatePlaces } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split('/')[1]
      : null;
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
    const type = 'place';
    const {
      places,
      popularPlaces,
      pagination,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <Loading /> }
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        <Popular
          destinationsType={type}
          destinations={popularPlaces}
        />
        <Destinations
          listType="scroll"
          destinationsType={type}
          destinations={places}
        />
        <Pagination
          values={pagination || undefined}
          clickHandle={this.changePageFunc}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places.places,
  popularPlaces: state.places.popularPlaces,
  pagination: state.places.pagination,
  loading: state.places.loading,
  error: state.places.error,
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
