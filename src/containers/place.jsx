import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPlace } from '../actions/places';
import '../scss/entityPage.scss';
import '../scss/text.scss';

class Place extends PureComponent {
  componentDidMount() {
    const { fetchPlaceById } = this.props;
    const href = window.location.href;
    const currentId = href.split('/').pop();
    fetchPlaceById(currentId);
  }

  toPreviousPage() {
    window.history.back();
  }

  render() {
    const { selectedPlace } = this.props;
    return (
      selectedPlace
        ? <div className="entity-info">
            <span className="entity-page-address">
              Home > {selectedPlace.country.name} > {selectedPlace.city.name} > {selectedPlace.name}
            </span>
            <img className="entity-img" src={selectedPlace.pic} />
            <div className="entity-name">{selectedPlace.name}</div>
            <div className="entity-address">{selectedPlace.info.address}</div>
            <span className="entity-type">{selectedPlace.type}</span>
            <div className="right-text">&#9733;{selectedPlace.stars}</div>
            <div className="entity-description">{selectedPlace.info.description}</div>
            <div className="right-text">{selectedPlace.info.price}</div>
          </div>
        : <div>
            <span>Oops, we did not find the place</span>
            <button onClick={this.toPreviousPage}>Back</button>
          </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  fetchPlaceById: (id) => {
    dispatch(fetchPlace(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Place);
