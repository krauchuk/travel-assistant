import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';

class CountyList extends PureComponent {
  render() {
    const type = 'country';
    const { counties, popularCountries } = this.props;
    return (
      <div>
        <span className="header-text">Popular</span>
        <List
          listType={'grid'}
          entityType={type}
          entities={popularCountries}
        />
        <List
          listType={'scroll'}
          entityType={type}
          entities={counties}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counties: state.countries.countries,
  popularCountries: state.countries.popularCountries,
});

export default connect(mapStateToProps)(CountyList);
