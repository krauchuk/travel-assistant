import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import { changePlacesFilter, fetchCity } from '../../actions/cities';
import CityInfo from '../../components/entity/city';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';

class City extends PureComponent {
  constructor() {
    super();
    this.canBack = true;
  }

  componentDidMount() {
    const {
      match,
      lastLocation,
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

const mapStateToProps = (state) => ({
  selectedCity: state.cities.selectedCity,
  loading: state.app.loading,
  placeTypeId: state.cities.filter.placeTypeId,
  error: state.app.error,
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
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
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
