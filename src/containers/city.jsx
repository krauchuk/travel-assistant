import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCity, changePlacesFilter } from '../actions/cities';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/entityPage.scss';
import '../scss/buttons.scss';
import '../scss/filter.scss';

class City extends PureComponent {
  componentDidMount() {
    const { fetchCityById } = this.props;
    const href = window.location.href;
    const currentId = href.split('/').pop();
    fetchCityById(currentId);
  }

  toPreviousPage() {
    window.history.back();
  }

  changePlacesTypeId(id) {
    const { changePlaceType } = this.props;
    changePlaceType(id);
  }

  render() {
    const {
      selectedCity,
      placeTypeId,
      loading,
     } = this.props;
    return (
      loading ? <div className="loading-text">Loading</div> :
      selectedCity
        ? <div>
            <span className="entity-page-address">Home > {selectedCity.country.name} > {selectedCity.name}</span>
            <img className="entity-img" src={selectedCity.pic} />
            <div className="entity-description">{selectedCity.info.description}</div>
            <div>
            <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
            {selectedCity.places.popular.length ?
              <div>
                <span className="header-text">Popular places</span>
                <List
                  listType={'grid'}
                  entityType={'place'}
                  entities={selectedCity.places.popular}
                />
              </div>
              : null
            }
            {selectedCity.places.all.length ?
              <div className="filter-block">
                <div className="filter-btn" onClick={() => this.changePlacesTypeId(0)}>All</div>
                <div className="filter-btn" onClick={() => this.changePlacesTypeId(1)}>Lodging</div>
                <div className="filter-btn" onClick={() => this.changePlacesTypeId(2)}>Attractions</div>
                <div className="filter-btn" onClick={() => this.changePlacesTypeId(3)}>Food</div>
              </div>
              : null
            }
            <List
              listType={'scroll'}
              entityType={'place'}
              entities={selectedCity.places.all
                .filter(place => {
                  if(placeTypeId === 0) {
                    return place;
                  }
                  return place.typeId === placeTypeId;
                })
              }
            />
            </div>
          </div>
        : <div>
            <div className="error-message">Oops, we did not find the city</div>
            <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCity: state.cities.selectedCity,
  loading: state.cities.loading,
  placeTypeId: state.cities.filter.placeTypeId,
});

const mapDispatchToProps = dispatch => ({
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
  changePlaceType: (type) => {
    dispatch(changePlacesFilter(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
