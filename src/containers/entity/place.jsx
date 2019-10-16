import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { fetchPlace } from '../../actions/places';
import PlaceInfo from '../../components/entity/place';
import '../../scss/text.scss';

class Place extends PureComponent {
  componentDidMount() {
    const { lastLocation, fetchPlaceById } = this.props;
    const href = window.location.href;
    const currentId = href.split('/').pop();
    const path = lastLocation ?
    lastLocation.pathname.split("/")[1]
    : null;
    path
    if (path === null) {
      this.toPreviousPage = null;
    }
    fetchPlaceById(currentId);
  }

  toPreviousPage() {
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
        { loading && <div className="loading-text">Loading</div> }
        { error &&  <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedPlace &&
          <PlaceInfo
            selectedPlace={selectedPlace}
            canBack={this.toPreviousPage}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlace: state.places.selectedPlace,
  loading: state.places.loading,
  error: state.places.error,
});

const mapDispatchToProps = dispatch => ({
  fetchPlaceById: (id) => {
    dispatch(fetchPlace(id));
  }
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Place));
