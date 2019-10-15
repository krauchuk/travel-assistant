import React from 'react';
import Filter from '../../components/filter';
import NoPic from '../system/noPic';
import List from '../../components/list';
import PopularGrid from '../../components/popularGrid';
import '../../scss/entityPage.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const city = ({
  selectedCity,
  placeTypeId,
  filterClickHandler,
  canBack,
 }) => (
  <div>
    <span className="entity-page-address">Home > {selectedCity.country.name} > {selectedCity.name}</span>
    { selectedCity.pic ?
      <img className="entity-img" src={selectedCity.pic} />
      :
      <NoPic type={'entity'} />
    }
    <div className="entity-description">{selectedCity.info.description}</div>
    <div>
      { canBack &&
        <button className="back-btn" onClick={canBack}>Back</button>
      }
      { !!selectedCity.places.popular.length &&
        <PopularGrid
          entityType={'place'}
          entities={selectedCity.places.popular}
        />
      }
      { !!selectedCity.places.all.length &&
        <Filter clickHandle={filterClickHandler} placeTypeId={placeTypeId}/>
      }
      <List
        listType={'scroll'}
        entityType={'place'}
        entities={selectedCity.places.all
          .filter(place => {
            if(placeTypeId === 0) {
              return place;
            }
            return place.typeId === placeTypeId;
          })
        }
      />
    </div>
  </div>
);

export default city;
