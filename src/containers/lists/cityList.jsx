import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import {
  changePage,
  fetchCities,
  fetchCity,
} from '../../actions/cities';
import '../../scss/text.scss';

class CityList extends PureComponent {
  componentDidMount() {
    const { lastLocation, changeCurrentPage } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split("/")[1]
      : null;
    if (path !== 'city') {
      changeCurrentPage(1);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      pagination,
      updateCities,
    } = this.props;
    if (prevProps.pagination.currentPage !== pagination.currentPage) {
      updateCities(pagination.currentPage);
      window.scrollTo(0, 0);
    }
  }

  changePageFunc = (page) => {
    const { changeCurrentPage } = this.props;
    changeCurrentPage(page);
  }

  cityClickHandle = (e) => {
    const { fetchCityById } =this.props;
    fetchCityById(e.currentTarget.id);
  }

  render() {
    const type = 'city';
    const {
      cities,
      popularCities,
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
            entities={popularCities}
            onClickHandle={this.cityClickHandle}
          />
          <List
            listType={'scroll'}
            entityType={type}
            entities={cities}
            onClickHandle={this.cityClickHandle}
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
  cities: state.cities.cities,
  popularCities: state.cities.popularCities,
  pagination: state.cities.pagination,
  loading: state.cities.loading,
});

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: (page) => {
    dispatch(changePage(page));
  },
  updateCities: (page) => {
    dispatch(fetchCities(page));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(CityList));
