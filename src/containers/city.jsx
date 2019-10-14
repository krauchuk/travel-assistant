import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changePlacesFilter } from '../actions/cities';
import { withLastLocation } from 'react-router-last-location';
import { fetchCity } from '../actions/cities';
import CityInfo from '../components/entity/city';
import Error from '../components/system/error';
import '../scss/text.scss';

class City extends PureComponent {
  componentDidMount() {
    const {
      lastLocation,
      changePlaceType,
      fetchCityById,
     } = this.props;
    const path = lastLocation ?
    lastLocation.pathname.split("/")[1]
    : null;
    if (path === null) {
      const href = window.location.href;
      const currentId = href.split('/').pop();
      fetchCityById(currentId);
      this.toPreviousPage = null;
    } else if(path !== 'place') {
      changePlaceType(0);
      window.scrollTo(0, 0);
    }
  }

  toPreviousPage() {
    window.history.back();
  }

  changePlacesTypeId = id => {
    const { changePlaceType } = this.props;
    changePlaceType(id);
  }

  render() {
    const {
      selectedCity,
      placeTypeId,
      loading,
      error,
     } = this.props;
    return (
      <div>
        { loading && <div className="loading-text">Loading</div> }
        { error &&  <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedCity &&
          <CityInfo
            canBack={this.toPreviousPage}
            selectedCity={selectedCity}
            filterClickHandler={this.changePlacesTypeId}
            placeTypeId={placeTypeId}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCity: state.cities.selectedCity,
  loading: state.cities.loading,
  placeTypeId: state.cities.filter.placeTypeId,
  error: state.cities.error,
});

const mapDispatchToProps = dispatch => ({
  changePlaceType: (type) => {
    dispatch(changePlacesFilter(type));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(City));
