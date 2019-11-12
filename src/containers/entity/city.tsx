import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation, WithLastLocationProps } from 'react-router-last-location';
import * as Types from '../../types';
import { changePlacesFilter, fetchCity } from '../../actions/cities';
import CityInfo from '../../components/entity/city';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';

interface Props extends WithLastLocationProps {
  match: Types.match;
  changePlaceType: (typeId: number) => void;
  fetchCityById: (id: string) => void;
  selectedCity?: Types.city | null;
  placeTypeId: number;
  loading: boolean;
  error?: string | null;
}

class City extends PureComponent<Props> {
  canBack = true;

  componentDidMount() {
    const {
      match,
      lastLocation = null,
      changePlaceType,
      fetchCityById,
    } = this.props;
    const path = lastLocation ? lastLocation.pathname.split('/')[1] : null;
    if (path === null) {
      fetchCityById(match.params.number);
      this.canBack = false;
    } else if (path !== 'place') {
      changePlaceType(0);
      window.scrollTo(0, 0);
    }
  }

  changePlacesTypeId = (id: number) => {
    const { changePlaceType } = this.props;
    changePlaceType(id);
  };

  toPreviousPage = () => {
    window.history.back();
  };

  render() {
    const {
      selectedCity = null,
      placeTypeId,
      loading,
      error = null,
    } = this.props;
    if (loading) return <Loading />;
    if (error) {
      return <Error message={error} canBack={this.canBack} backFunc={this.toPreviousPage} />;
    }
    return (
      <div>
        { selectedCity &&
          <CityInfo
            city={selectedCity}
            filterClickHandler={this.changePlacesTypeId}
            placeTypeId={placeTypeId}
            backFunc={this.toPreviousPage}
            canBack={this.canBack}
          /> }
      </div>
    );
  }
}

const mapStateToProps = (state: Types.appState) => ({
  selectedCity: state.cities.selectedCity,
  loading: state.app.loading,
  placeTypeId: state.cities.filter.placeTypeId,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  changePlaceType: (type: number) => {
    dispatch(changePlacesFilter(type));
  },
  fetchCityById: (id: string) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(City));
