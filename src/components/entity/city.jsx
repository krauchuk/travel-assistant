import React from 'react';
import Filter from '../../components/filter';
import NoPic from '../system/noPic';
import List from '../list/list';
import PopularGrid from '../list/popularEntityGrid';
import '../../scss/entityPage.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const City = ({
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
      { !!selectedCity.places.types.length &&
        <Filter
          clickHandle={filterClickHandler}
          selectedEntityTypeId={placeTypeId}
          types={selectedCity.places.types}
        />
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

export default City;
