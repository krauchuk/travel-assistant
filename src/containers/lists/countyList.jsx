import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import {
  changePage,
  fetchCountries,
} from '../../actions/countries';
import '../../scss/text.scss';

class CountyList extends PureComponent {
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
          />
          <List
            listType={'scroll'}
            entityType={type}
            entities={countries}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CountyList);
