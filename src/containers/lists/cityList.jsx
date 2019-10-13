import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import {
  changePage,
  fetchCities,
} from '../../actions/cities';
import '../../scss/text.scss';

class CityList extends PureComponent {
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
          />
          <List
            listType={'scroll'}
            entityType={type}
            entities={cities}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
