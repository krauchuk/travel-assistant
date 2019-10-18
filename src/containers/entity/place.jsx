import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import { fetchPlace } from '../../actions/places';
import PlaceInfo from '../../components/entity/place';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';

class Place extends PureComponent {
  componentDidMount() {
    const { match, lastLocation, fetchPlaceById } = this.props;
    const path = lastLocation ? lastLocation.pathname.split('/')[1] : null;
    if (path === null) {
      this.toPreviousPage = null;
    }
    fetchPlaceById(match.params.number);
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
    if (loading) return <Loading />;
    if (error) return <Error message={error} goBack={this.toPreviousPage} />;
    return (
      <div>
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
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceById: (id) => {
    dispatch(fetchPlace(id));
  },
});

Place.propTypes = {
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
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
