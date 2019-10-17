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
  city,
  placeTypeId,
  filterClickHandler,
  goBack,
}) => (
  <div>
    <span className="entity__path">
      {`Home > ${city.country.name} > ${city.name}`}
    </span>
    { city.pic ?
      <img alt="city pic" className="entity__img" src={city.pic} />
      : <NoPic type="entity" /> }
    <div className="entity__description">{city.info.description}</div>
    <div>
      { goBack && <button className="btn" onClick={goBack} type="button">Back</button> }
      { city.popularPlaces &&
        <Popular
          destinationsType="place"
          destinations={city.popularPlaces}
        /> }
      { city.placesTypes &&
        <Filter
          clickHandle={filterClickHandler}
          selectedEntityTypeId={placeTypeId}
          types={city.placesTypes}
        /> }
      <Destinations
        listType="scroll"
        destinationsType="place"
        destinations={city.places.filter((place) => {
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
  goBack: PropTypes.func,
};

City.defaultProps = {
  goBack: null,
};

export default City;
