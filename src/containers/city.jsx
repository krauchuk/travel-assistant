import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/cities';

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
        ? <div>
            About {selectedCity.name}
            {selectedCity.info.description}
            {selectedCity.stars}
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
