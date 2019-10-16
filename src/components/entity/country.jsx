import React from 'react';
import NoPic from '../system/noPic';
import List from '../list/list';
import PopularGrid from '../list/popularEntityGrid';
import '../../scss/entityPage.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const Country = ({
  selectedCountry,
  cityClickHandle,
  canBack,
 }) => (
  <div>
    <span className="entity-page-address">Home > {selectedCountry.name}</span>
    { selectedCountry.pic ?
      <img className="entity-img" src={selectedCountry.pic} />
      :
      <NoPic type={'entity'} />
    }
    <div className="entity-description">{selectedCountry.description}</div>
    <div>
      { canBack &&
        <button className="back-btn" onClick={canBack}>Back</button>
      }
      { !!selectedCountry.cities.popular.length &&
        <PopularGrid
          entityType={'city'}
          entities={selectedCountry.cities.popular}
          onClickHandle={cityClickHandle}
        />
      }
      { !!selectedCountry.popularPlaces.length &&
        <PopularGrid
          entityType={'place'}
          entities={selectedCountry.popularPlaces}
        />
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

export default Country;
