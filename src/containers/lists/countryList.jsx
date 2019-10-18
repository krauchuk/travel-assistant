import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import List from '../../components/list';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';
import {
  fetchCountries,
  fetchCountry,
} from '../../actions/countries';

class CountryList extends PureComponent {
  componentDidMount() {
    const { lastLocation, updateCountries } = this.props;
    const path = lastLocation && lastLocation.pathname.split('/')[1];
    if (path !== 'country') {
      updateCountries(1);
    }
  }

  changePageFunc = (page) => {
    const { updateCountries } = this.props;
    updateCountries(page);
    window.scrollTo(0, 0);
  }

  countryClickHandle = (e) => {
    const { fetchCountryById } = this.props;
    fetchCountryById(e.currentTarget.id);
  }

  render() {
    const {
      countries,
      popularCountries,
      pagination,
      loading,
      error,
    } = this.props;
    if (loading) return <Loading />;
    if (error) return <Error message={error} goBack={this.toPreviousPage} />;
    return (
      <div>
        <List
          destinationsType="country"
          popularDestinations={popularCountries}
          destinations={countries}
          pagination={pagination}
          destinationClickHandle={this.countryClickHandle}
          paginationClickHandle={this.changePageFunc}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  popularCountries: state.countries.popularCountries,
  pagination: state.countries.pagination,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateCountries: (page) => {
    dispatch(fetchCountries(page));
  },
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
});

CountryList.propTypes = {
  lastLocation: appPropTypes.location,
  countries: appPropTypes.countries.isRequired,
  popularCountries: appPropTypes.countries.isRequired,
  updateCountries: PropTypes.func.isRequired,
  fetchCountryById: PropTypes.func.isRequired,
  pagination: appPropTypes.pagination,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

CountryList.defaultProps = {
  pagination: null,
  lastLocation: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(CountryList));
