import React from 'react';
import NoPic from '../system/noPic';
import '../../scss/entityPage.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const Place = ({
  selectedPlace,
  canBack,
 }) => (
  <div>
    <span className="entity-page-address">
      Home > {selectedPlace.country.name} > {selectedPlace.city.name} > {selectedPlace.name}
    </span>
    { selectedPlace.pic ?
      <img className="entity-img" src={selectedPlace.pic} />
      :
      <NoPic type={'entity'} />
    }
    <div className="entity-info">
        <div className="entity-name">{selectedPlace.name}</div>
        <div className="entity-address">{selectedPlace.info.address}</div>
        <span className="entity-type">{selectedPlace.type}</span>
        <div className="right-text">&#9733;{selectedPlace.stars}</div>
        <div className="entity-description">{selectedPlace.info.description}</div>
        <div className="entity-price">{selectedPlace.info.price}</div>
        { canBack &&
          <button className="back-btn" onClick={canBack}>Back</button>
        }
      </div>
  </div>
);

export default Place;
