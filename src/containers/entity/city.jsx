import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import { changePlacesFilter, fetchCity } from '../../actions/cities';
import CityInfo from '../../components/entity/city';
import Error from '../../components/common/error';
import '../../scss/text.scss';

class City extends PureComponent {
  componentDidMount() {
    const {
      lastLocation,
      changePlaceType,
      fetchCityById,
    } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split('/')[1]
      : null;
    if (path === null) {
      const href = window.location.href;
      const currentId = href.split('/').pop();
      fetchCityById(currentId);
      this.toPreviousPage = null;
    } else if (path !== 'place') {
      changePlaceType(0);
      window.scrollTo(0, 0);
    }
  }

  changePlacesTypeId = (id) => {
    const { changePlaceType } = this.props;
    changePlaceType(id);
  }

  toPreviousPage = () => {
    window.history.back();
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
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedCity &&
          <CityInfo
            goBack={this.toPreviousPage}
            city={selectedCity}
            filterClickHandler={this.changePlacesTypeId}
            placeTypeId={placeTypeId}
          /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCity: state.cities.selectedCity,
  loading: state.cities.loading,
  placeTypeId: state.cities.filter.placeTypeId,
  error: state.cities.error,
});

const mapDispatchToProps = (dispatch) => ({
  changePlaceType: (type) => {
    dispatch(changePlacesFilter(type));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

City.propTypes = {
  lastLocation: appPropTypes.location,
  changePlaceType: PropTypes.func.isRequired,
  fetchCityById: PropTypes.func.isRequired,
  selectedCity: appPropTypes.city,
  placeTypeId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

City.defaultProps = {
  lastLocation: null,
  selectedCity: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(City));
