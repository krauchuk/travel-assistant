import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/cities';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/entityPage.scss';

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

  render() {
    const { selectedCity } = this.props;
    return (
      selectedCity
        ? <div className="entity-info">
            <span className="entity-page-address">Home > {selectedCity.country.name} > {selectedCity.name}</span>
            <img className="entity-img" src={selectedCity.pic} />
            <div className="entity-description">{selectedCity.info.description}</div>
            <div>
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
              <List
                listType={'scroll'}
                entityType={'place'}
                entities={selectedCity.places.all}
              />
            </div>
          </div>
        : <div>
            <span>Oops, we did not find the city</span>
            <button onClick={this.toPreviousPage}>Back</button>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCity: state.cities.selectedCity,
});

const mapDispatchToProps = dispatch => ({
  fetchCityById: (id) => {
    dispatch(fetchCity(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
