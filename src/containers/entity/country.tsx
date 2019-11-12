import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation, WithLastLocationProps } from 'react-router-last-location';
import * as Types from '../../types';
import { fetchCountry } from '../../actions/countries';
import { fetchCity } from '../../actions/cities';
import CountryInfo from '../../components/entity/country';
import Error from '../../components/common/error';
import Loading from '../../components/common/loading';

interface Props extends WithLastLocationProps {
  match: Types.match;
  fetchCityById: (id: string) => void;
  fetchCountryById: (id: string) => void;
  selectedCountry?: Types.country | null;
  loading: boolean;
  error?: string | null;
}

class Country extends PureComponent<Props> {
  canBack = true;

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

  cityClickHandle = (e: React.MouseEvent) => {
    const { fetchCityById } = this.props;
    fetchCityById(e.currentTarget.id);
  };

  toPreviousPage = () => {
    window.history.back();
  };

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

const mapStateToProps = (state: Types.appState) => ({
  selectedCountry: state.countries.selectedCountry,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCountryById: (id: string) => {
    dispatch(fetchCountry(id));
  },
  fetchCityById: (id: string) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Country));
