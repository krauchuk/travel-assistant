import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import NoPic from '../common/noPic';
import '../../scss/entity.scss';
import '../../scss/text.scss';
import '../../scss/buttons.scss';

const Place = ({
  place: {
    name,
    pic,
    info: {
      address,
      description,
      price,
    },
    type,
    stars,
    country,
    city,
  },
  backFunc,
  canBack,
}) => (
  <div>
    <span className="entity__path">
      {`Home > ${country.name} > ${city.name} > ${name}`}
    </span>
    { pic ?
      <img alt="place img" className="entity__img" src={pic} />
      : <NoPic type="entity" /> }
    <div className="entity__info">
      <div className="entity__name">{name}</div>
      <div className="entity__address">{address}</div>
      <span className="entity__type">{type}</span>
      <div className="entity__stars">
        &#9733;
        {stars}
      </div>
      <div className="entity__description">{description}</div>
      <div className="entity__price">{price}</div>
      { canBack && <button className="btn" onClick={backFunc} type="button">Back</button> }
    </div>
  </div>
);

Place.propTypes = {
  place: appPropTypes.place.isRequired,
  backFunc: PropTypes.func.isRequired,
  canBack: PropTypes.bool.isRequired,
};

export default Place;
