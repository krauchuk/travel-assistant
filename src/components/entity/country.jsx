import React from 'react';
import NoPic from '../system/noPic';
import List from '../../components/list';
import '../../scss/entityPage.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const country = ({
  selectedCountry,
  cityClickHandle,
  canBack,
 }) => (
  <div>
    <span className="entity-page-address">Home > {selectedCountry.name}</span>
    { selectedCountry.pic ?
      <img className="entity-img" src={selectedCountry.pic} />
      :
      <NoPic />
    }
    <div className="entity-description">{selectedCountry.description}</div>
    <div>
      { canBack &&
        <button className="back-btn" onClick={canBack}>Back</button>
      }
      { !!selectedCountry.cities.popular.length &&
        <div>
          <span className="header-text">Popular cities</span>
          <List
            listType={'grid'}
            entityType={'city'}
            entities={selectedCountry.cities.popular}
            onClickHandle={cityClickHandle}
          />
        </div>
      }
      { !!selectedCountry.popularPlaces.length &&
        <div>
          <span className="header-text">Popular places</span>
          <List
            listType={'grid'}
            entityType={'place'}
            entities={selectedCountry.popularPlaces}
          />
        </div>
      }
      <List
        listType={'scroll'}
        entityType={'city'}
        entities={selectedCountry.cities.all}
        onClickHandle={cityClickHandle}
      />
    </div>
  </div>
);

export default country;
