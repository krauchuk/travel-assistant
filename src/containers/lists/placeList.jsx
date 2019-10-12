import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';

class PlaceList extends PureComponent {
  render() {
    const type = 'place';
    const { places, popularPlaces } = this.props;
    return (
      <div>
        Popular
        <List
          entityType={type}
          entities={popularPlaces}
        />
        <List
          entityType={type}
          entities={places}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
  popularPlaces: state.places.popularPlaces,
});

export default connect(mapStateToProps)(PlaceList);
