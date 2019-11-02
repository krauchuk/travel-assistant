import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import Filter from '../filter';
import NoPic from '../common/noPic';
import Destinations from '../destinations';
import Popular from '../destinations/popular';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const City = ({
  city: {
    name,
    pic,
    info: {
      description,
    },
    places,
    popularPlaces,
    placesTypes,
    country,
  },
  placeTypeId,
  filterClickHandler,
  backFunc,
  canBack,
}) => (
  <div>
    <span className="entity__path">
      {`Home > ${country.name} > ${name}`}
    </span>
    { pic ?
      <img alt="city pic" className="entity__img" src={pic} />
      : <NoPic type="entity" /> }
    <div className="entity__description">{description}</div>
    <div>
      { canBack && <button className="btn" onClick={backFunc} type="button">Back</button> }
      { popularPlaces &&
        <Popular
          destinationsType="place"
          destinations={popularPlaces}
        /> }
      { placesTypes &&
        <Filter
          clickHandle={filterClickHandler}
          selectedEntityTypeId={placeTypeId}
          types={placesTypes}
        /> }
      <Destinations
        listType="scroll"
        destinationsType="place"
        destinations={places.filter((place) => {
          if (placeTypeId === 0) {
            return place;
          }
          return place.typeId === placeTypeId;
        })}
      />
    </div>
  </div>
);

City.propTypes = {
  city: appPropTypes.city.isRequired,
  placeTypeId: PropTypes.number.isRequired,
  filterClickHandler: PropTypes.func.isRequired,
  backFunc: PropTypes.func.isRequired,
  canBack: PropTypes.bool.isRequired,
};

export default City;
