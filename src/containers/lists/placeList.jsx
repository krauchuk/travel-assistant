import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import {
  changePage,
  fetchPlaces,
} from '../../actions/places';

class PlaceList extends PureComponent {
  componentDidUpdate(prevProps) {
    const {
      pagination,
      updatePlaces,
    } = this.props;
    if (prevProps.pagination.currentPage !== pagination.currentPage) {
      updatePlaces(pagination.currentPage);
      window.scrollTo(0, 0);
    }
  }

  changePageFunc = (page) => {
    const { changeCurrentPage } = this.props;
    changeCurrentPage(page);
  }

  render() {
    const type = 'place';
    const {
      places,
      popularPlaces,
      pagination,
    } = this.props;
    return (
      <div>
        <span className="header-text">Popular</span>
        <List
          listType={'grid'}
          entityType={type}
          entities={popularPlaces}
        />
        <List
          listType={'scroll'}
          entityType={type}
          entities={places}
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
  places: state.places.places,
  popularPlaces: state.places.popularPlaces,
  pagination: state.places.pagination,
});

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: (page) => {
    dispatch(changePage(page));
  },
  updatePlaces: (page) => {
    dispatch(fetchPlaces(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
