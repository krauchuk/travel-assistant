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

class Country extends PureComponent {
  constructor() {
    super();
    this.canBack = true;
  }

  componentDidMount() {
    const {
      match,
      lastLocation,
      fetchCountryById,
    } = this.props;
    const path = lastLocation ? lastLocation.pathname.split('/')[1] : null;
    if (path === null) {
      fetchCountryById(match.params.number);
      this.canBack = false;
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
    if (loading) return <Loading />;
    if (error) {
      return <Error message={error} canBack={this.canBack} backFunc={this.toPreviousPage} />;
    }
    return (
      <div>
        { selectedCountry &&
          <CountryInfo
            country={selectedCountry}
            cityClickHandle={this.cityClickHandle}
            backFunc={this.toPreviousPage}
            canBack={this.canBack}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCountry: state.countries.selectedCountry,
  loading: state.app.loading,
  error: state.app.error,
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
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
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
