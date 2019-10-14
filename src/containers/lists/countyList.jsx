import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import {
  changePage,
  fetchCountries,
  fetchCountry,
} from '../../actions/countries';
import '../../scss/text.scss';

class CountyList extends PureComponent {
  componentDidMount() {
    const { lastLocation, changeCurrentPage } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split("/")[1]
      : null;
    if (path !== 'country') {
      changeCurrentPage(1);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      pagination,
      updateCountries,
    } = this.props;
    if (prevProps.pagination.currentPage !== pagination.currentPage) {
      updateCountries(pagination.currentPage);
      window.scrollTo(0, 0);
    }
  }

  changePageFunc = (page) => {
    const { changeCurrentPage } = this.props;
    changeCurrentPage(page);
  }

  countryClickHandle = (e) => {
    const { fetchCountryById } =this.props;
    fetchCountryById(e.currentTarget.id);
  }

  render() {
    const type = 'country';
    const {
      countries,
      popularCountries,
      pagination,
      loading,
     } = this.props;
    return (
      loading ? <div className="loading-text">Loading</div> :
        <div>
          <span className="header-text">Popular</span>
          <List
            listType={'grid'}
            entityType={type}
            entities={popularCountries}
            onClickHandle={this.countryClickHandle}
          />
          <List
            listType={'scroll'}
            entityType={type}
            entities={countries}
            onClickHandle={this.countryClickHandle}
          />
          <Pagination
            values={pagination}
            changePageFunc={this.changePageFunc}
          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries.countries,
  popularCountries: state.countries.popularCountries,
  pagination: state.countries.pagination,
  loading: state.countries.loading,
});

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: (page) => {
    dispatch(changePage(page));
  },
  updateCountries: (page) => {
    dispatch(fetchCountries(page));
  },
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(CountyList));
