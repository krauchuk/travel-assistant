import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import { fetchCountry } from '../../actions/countries';
import { fetchCity } from '../../actions/cities';
import CountryInfo from '../../components/entity/country';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';
import '../../scss/text.scss';

class Country extends PureComponent {
  componentDidMount() {
    const {
      lastLocation,
      fetchCountryById,
    } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split('/')[1]
      : null;
    if (path === null) {
      const href = window.location.href;
      const currentId = href.split('/').pop();
      fetchCountryById(currentId);
      this.toPreviousPage = null;
    } else if (path !== 'city') {
      window.scrollTo(0, 0);
    }
  }

  cityClickHandle = (e) => {
    const { fetchCityById } = this.props;
    fetchCityById(e.currentTarget.id);
  }

  toPreviousPage = () => {
    window.history.back();
  }

  render() {
    const {
      selectedCountry,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <Loading /> }
        { error && <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedCountry &&
          <CountryInfo
            country={selectedCountry}
            cityClickHandle={this.cityClickHandle}
            goBack={this.toPreviousPage}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCountry: state.countries.selectedCountry,
  loading: state.countries.loading,
  error: state.countries.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

Country.propTypes = {
  lastLocation: appPropTypes.location,
  fetchCityById: PropTypes.func.isRequired,
  fetchCountryById: PropTypes.func.isRequired,
  selectedCountry: appPropTypes.country,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Country.defaultProps = {
  lastLocation: null,
  selectedCountry: null,
  error: null,
};

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Country));
