import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import List from '../../components/list';
import Pagination from '../../containers/pagination';
import PopularGrid from '../../components/popularGrid';
import {
  changePage,
  fetchPlaces,
} from '../../actions/places';
import '../../scss/text.scss';

class PlaceList extends PureComponent {
  componentDidMount() {
    const { lastLocation, changeCurrentPage } = this.props;
    const path = lastLocation ?
      lastLocation.pathname.split("/")[1]
      : null;
    if (path !== 'place') {
      changeCurrentPage(1);
    }
  }

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
      loading,
    } = this.props;
    return (
      loading ? <div className="loading-text">Loading</div> :
        <div>
          <PopularGrid
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
  loading: state.places.loading,
});

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: (page) => {
    dispatch(changePage(page));
  },
  updatePlaces: (page) => {
    dispatch(fetchPlaces(page));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(PlaceList));
