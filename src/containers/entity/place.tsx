import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation, WithLastLocationProps } from 'react-router-last-location';
import * as Types from '../../types';
import { fetchPlace } from '../../actions/places';
import PlaceInfo from '../../components/entity/place';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';

interface Props extends WithLastLocationProps {
  match: Types.match;
  fetchPlaceById: (id: string) => void;
  selectedPlace?: Types.place | null;
  loading: boolean;
  error?: string | null;
}

class Place extends PureComponent<Props> {
  canBack = true;

  componentDidMount() {
    const { match, lastLocation, fetchPlaceById } = this.props;
    const path = lastLocation ? lastLocation.pathname.split('/')[1] : null;
    if (path === null) {
      this.canBack = false;
    }
    fetchPlaceById(match.params.number);
  }

  toPreviousPage = () => {
    window.history.back();
  };

  render() {
    const {
      selectedPlace,
      loading,
      error,
    } = this.props;
    if (loading) return <Loading />;
    if (error) {
      return <Error message={error} canBack={this.canBack} backFunc={this.toPreviousPage} />;
    }
    return (
      <div>
        { selectedPlace &&
          <PlaceInfo
            place={selectedPlace}
            backFunc={this.toPreviousPage}
            canBack={this.canBack}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state: Types.appState) => ({
  selectedPlace: state.places.selectedPlace,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchPlaceById: (id: string) => {
    dispatch(fetchPlace(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Place));
