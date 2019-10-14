import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import CountryInfo from '../components/entity/country';
import Error from '../components/system/error';
import '../scss/text.scss';

class Country extends PureComponent {
  componentDidMount() {
    const {
      lastLocation,
      fetchCountryById,
     } = this.props;
    const path = lastLocation ?
    lastLocation.pathname.split("/")[1]
    : null;
    if (path === null) {
      const href = window.location.href;
      const currentId = href.split('/').pop();
      fetchCountryById(currentId);
      this.toPreviousPage = null;
    }
  }

  toPreviousPage() {
    window.history.back();
  }

  cityClickHandle = (e) => {
    const { fetchCityById } =this.props;
    fetchCityById(e.currentTarget.id);
  }

  render() {
    const {
      selectedCountry,
      loading,
      error,
    } = this.props;
    return (
      <div>
        { loading && <div className="loading-text">Loading</div> }
        { error &&  <Error message={error} goBack={this.toPreviousPage} /> }
        { selectedCountry &&
          <CountryInfo
            selectedCountry={selectedCountry}
            cityClickHandle={this.cityClickHandle}
            canBack={this.toPreviousPage}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCountry: state.countries.selectedCountry,
  loading: state.countries.loading,
  error: state.countries.error,
});

const mapDispatchToProps = dispatch => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Country));
