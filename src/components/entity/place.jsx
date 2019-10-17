import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import NoPic from '../common/noPic';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const Place = ({
  place,
  goBack,
}) => (
  <div>
    <span className="entity__path">
      {`Home > ${place.country.name} > ${place.city.name} > ${place.name}`}
    </span>
    { place.pic ?
      <img alt="place img" className="entity__img" src={place.pic} />
      : <NoPic type="entity" /> }
    <div className="entity__info">
      <div className="entity__name">{place.name}</div>
      <div className="entity__address">{place.info.address}</div>
      <span className="entity__type">{place.type}</span>
      <div className="entity__stars">
        &#9733;
        {place.stars}
      </div>
      <div className="entity__description">{place.info.description}</div>
      <div className="entity__price">{place.info.price}</div>
      { goBack && <button className="btn" onClick={goBack} type="button">Back</button> }
    </div>
  </div>
);

Place.propTypes = {
  place: appPropTypes.place.isRequired,
  goBack: PropTypes.func,
};

Place.defaultProps = {
  goBack: null,
};

export default Place;
