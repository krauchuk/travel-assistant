import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPlace } from '../actions/places';

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
        ? <div>
            <div>
              {selectedPlace.pic}
            </div>
            {selectedPlace.name}
            {selectedPlace.type}
            {selectedPlace.stars}
            {selectedPlace.info.address}
            {selectedPlace.info.description}
            {selectedPlace.info.price}
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
