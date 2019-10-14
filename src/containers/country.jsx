import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { fetchCountry } from '../actions/countries';
import { fetchCity } from '../actions/cities';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/entityPage.scss';
import '../scss/buttons.scss';

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
      error ?
        <div>
          <div className="error-message">{error}</div>
          <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
        </div>
      : loading ? <div className="loading-text">Loading</div> :
      selectedCountry
        ? <div>
            <span className="entity-page-address">Home > {selectedCountry.name}</span>
            {selectedCountry.pic ?
              <img className="entity-img" src={selectedCountry.pic} />
              : <div className="entity-img-not-found">
                  <span className="entity-img-not-found-text">
                    {'No photo :('}
                  </span>
                </div>
            }
            <div className="entity-description">{selectedCountry.description}</div>
            <div>
            { this.toPreviousPage ?
                <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
              : null
            }
              { selectedCountry.cities.popular.length ?
                <div>
                  <span className="header-text">Popular cities</span>
                  <List
                    listType={'grid'}
                    entityType={'city'}
                    entities={selectedCountry.cities.popular}
                    onClickHandle={this.cityClickHandle}
                  />
                </div>
                : null
              }
              { selectedCountry.popularPlaces.length ?
                <div>
                  <span className="header-text">Popular places</span>
                  <List
                    listType={'grid'}
                    entityType={'place'}
                    entities={selectedCountry.popularPlaces}
                  />
                </div>
                : null
              }
              <List
                listType={'scroll'}
                entityType={'city'}
                entities={selectedCountry.cities.all}
                onClickHandle={this.cityClickHandle}
              />
            </div>
          </div>
        : <div>
            <div className="error-message">Oops, we did not find the country</div>
            { this.toPreviousPage ?
                <button className="back-btn" onClick={this.toPreviousPage}>Back</button>
              : null
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
