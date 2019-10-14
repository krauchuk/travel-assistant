import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changePlacesFilter } from '../actions/cities';
import { withLastLocation } from 'react-router-last-location';
import { fetchCity } from '../actions/cities';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/entityPage.scss';
import '../scss/buttons.scss';
import '../scss/filter.scss';

class City extends PureComponent {
  componentDidMount() {
    const {
      lastLocation,
      changePlaceType,
      fetchCityById,
     } = this.props;
    const path = lastLocation ?
    lastLocation.pathname.split("/")[1]
    : null;
    if (path === null) {
      const href = window.location.href;
      const currentId = href.split('/').pop();
      fetchCityById(currentId);
      this.toPreviousPage = null;
    } else if(path !== 'place') {
      changePlaceType(0);
    }
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
      error,
     } = this.props;
    return (
      error ?
        <div>
          <div className="error-message">{error}</div>
          <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
        </div>
      : loading ? <div className="loading-text">Loading</div> :
      selectedCity
        ? <div>
            <span className="entity-page-address">Home > {selectedCity.country.name} > {selectedCity.name}</span>
            {selectedCity.pic ?
              <img className="entity-img" src={selectedCity.pic} />
              : <div className="entity-img-not-found">
                  <span className="entity-img-not-found-text">
                    {'No photo :('}
                  </span>
                </div>
            }
            <div className="entity-description">{selectedCity.info.description}</div>
            <div>
            { this.toPreviousPage ?
                <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
              : null
            }
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
                {
                  ['All', 'Lodging', 'Attractions', 'Food'].map((txt, index) => (
                    <div
                      key={index}
                      className={'filter-btn' + (placeTypeId === index ? '-pressed' : '')}
                      onClick={() => this.changePlacesTypeId(index)}
                    >{txt}</div>
                  ))
                  }
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
            { this.toPreviousPage ?
                <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
              : null
            }
          </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCity: state.cities.selectedCity,
  loading: state.cities.loading,
  placeTypeId: state.cities.filter.placeTypeId,
  error: state.cities.error,
});

const mapDispatchToProps = dispatch => ({
  changePlaceType: (type) => {
    dispatch(changePlacesFilter(type));
  },
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(City));
