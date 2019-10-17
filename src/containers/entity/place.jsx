import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import { fetchPlace } from '../../actions/places';
import PlaceInfo from '../../components/entity/place';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';
import '../../scss/text.scss';

class Place extends PureComponent {
  componentDidMount() {
    const { lastLocation, fetchPlaceById } = this.props;
    const href = window.location.href;
    const currentId = href.split('/').pop();
    const path = lastLocation ?
      lastLocation.pathname.split('/')[1]
      : null;
    if (path === null) {
      this.toPreviousPage = null;
    }
    fetchPlaceById(currentId);
  }

  toPreviousPage = () => {
    window.history.back();
  }

  render() {
    const {
      selectedPlace,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <Loading /> }
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedPlace &&
          <PlaceInfo
            place={selectedPlace}
            goBack={this.toPreviousPage}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPlace: state.places.selectedPlace,
  loading: state.places.loading,
  error: state.places.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceById: (id) => {
    dispatch(fetchPlace(id));
  },
});

Place.propTypes = {
  lastLocation: appPropTypes.location,
  fetchPlaceById: PropTypes.func.isRequired,
  selectedPlace: appPropTypes.place,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Place.defaultProps = {
  lastLocation: null,
  selectedPlace: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Place));
