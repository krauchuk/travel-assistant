import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '../components/list';
import '../scss/text.scss';
import '../scss/buttons.scss';

class HomePage extends PureComponent {
  render() {
    const {
      popularCountries,
      popularCities,
      popularPlaces,
    } = this.props;
    return (
      <div>
        <span className="header-text">
          Country <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/country" className="more-btn">More</Link>
        <List
          listType={'grid'}
          entityType={'country'}
          entities={popularCountries}
        />
        <span className="header-text">
          City <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/city" className="more-btn">More</Link>
        <List
          listType={'grid'}
          entityType={'city'}
          entities={popularCities}
        />
        <span className="header-text">
          Place <span className="header-hot-text">Hot</span>
        </span>
        <Link to="/place" className="more-btn">More</Link>
        <List
          listType={'grid'}
          entityType={'place'}
          entities={popularPlaces}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  popularCountries: state.countries.popularCountries,
  popularCities: state.cities.popularCities,
  popularPlaces: state.places.popularPlaces,
});

export default connect(mapStateToProps)(HomePage);
