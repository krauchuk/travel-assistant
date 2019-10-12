import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../actions/countries';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/entityPage.scss';

class Country extends PureComponent {
  componentDidMount() {
    const { fetchCountryById } = this.props;
    const href = window.location.href;
    const currentId = href.split('/').pop();
    fetchCountryById(currentId);
  }

  toPreviousPage() {
    window.history.back();
  }

  render() {
    const { selectedCountry } = this.props;
    return (
      selectedCountry
        ? <div className="entity-info">
            <span className="entity-page-address">Home > {selectedCountry.name}</span>
            <img className="entity-img" src={selectedCountry.pic} />
            <div className="entity-description">{selectedCountry.description}</div>
            <div>
              { selectedCountry.cities.popular.length ?
                <div>
                  <span className="header-text">Popular cities</span>
                  <List
                    listType={'grid'}
                    entityType={'city'}
                    entities={selectedCountry.cities.popular}
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
              />
            </div>
          </div>
        : <div>
            <span>Oops, we did not find the country</span>
            <button onClick={this.toPreviousPage}>Back</button>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedCountry: state.countries.selectedCountry,
});

const mapDispatchToProps = dispatch => ({
  fetchCountryById: (id) => {
    dispatch(fetchCountry(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
