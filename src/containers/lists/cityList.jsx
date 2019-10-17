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
  fetchCities,
  fetchCity,
} from '../../actions/cities';
import '../../scss/text.scss';

class CityList extends PureComponent {
  componentDidMount() {
    const { lastLocation, updateCities } = this.props;
    const path = lastLocation && lastLocation.pathname.split('/')[1];
    if (path !== 'city') {
      updateCities(1);
    }
  }

  changePageFunc = (page) => {
    const { updateCities } = this.props;
    updateCities(page);
    window.scrollTo(0, 0);
  }

  cityClickHandle = (e) => {
    const { fetchCityById } = this.props;
    fetchCityById(e.currentTarget.id);
  }

  render() {
    const type = 'city';
    const {
      cities,
      popularCities,
      pagination,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <Loading /> }
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        { !!popularCities.length &&
          <Popular
            destinationsType={type}
            destinations={popularCities}
            onClickHandle={this.cityClickHandle}
          />}
        <Destinations
          listType="scroll"
          destinationsType={type}
          destinations={cities}
          onClickHandle={this.cityClickHandle}
        />
        { pagination &&
          <Pagination
            values={pagination || undefined}
            clickHandle={this.changePageFunc}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
  popularCities: state.cities.popularCities,
  pagination: state.cities.pagination,
  loading: state.cities.loading,
  error: state.cities.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateCities: (page) => {
    dispatch(fetchCities(page));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

CityList.propTypes = {
  lastLocation: appPropTypes.location,
  fetchCityById: PropTypes.func.isRequired,
  updateCities: PropTypes.func.isRequired,
  cities: appPropTypes.cities.isRequired,
  popularCities: appPropTypes.cities.isRequired,
  pagination: appPropTypes.pagination,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

CityList.defaultProps = {
  pagination: null,
  lastLocation: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(CityList));
