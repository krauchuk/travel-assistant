import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchCountry } from '../actions/countries';

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
        ? <div>
            <div>
              {selectedCountry.pic}
            </div>
            {selectedCountry.name}
            {selectedCountry.stars}
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
