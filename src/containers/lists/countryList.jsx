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
  fetchCountries,
  fetchCountry,
} from '../../actions/countries';
import '../../scss/text.scss';

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
    const type = 'country';
    const {
      countries,
      popularCountries,
      pagination,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <Loading /> }
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        <Popular
          destinationsType={type}
          destinations={popularCountries}
          onClickHandle={this.countryClickHandle}
        />
        <Destinations
          listType="scroll"
          destinationsType={type}
          destinations={countries}
          onClickHandle={this.countryClickHandle}
        />
        <Pagination
          values={pagination || undefined}
          clickHandle={this.changePageFunc}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  popularCountries: state.countries.popularCountries,
  pagination: state.countries.pagination,
  loading: state.countries.loading,
  error: state.countries.error,
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
