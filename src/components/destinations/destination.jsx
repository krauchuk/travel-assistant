import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import NoPic from '../common/noPic';
import '../../scss/destination.scss';

const Destination = ({
  listType,
  destinationType,
  destination,
  onClickHandle,
}) => (
  <div className={`${listType}-list__entity`}>
    <Link to={`/${destinationType}/${destination.id}`} id={destination.id} onClick={onClickHandle}>
      { destination.pic ? <img alt="destination pic" className={`${listType}-list__img`} src={destination.pic} />
        : <NoPic type={listType} /> }
      <div className={`${listType}-list__body`}>
        <div className={`${listType}-list__header`}>{destination.name}</div>
        { destination.info.address &&
          <div className={`${listType}-list__list-address`}>{destination.info.address}</div> }
        <div className={`${listType}-list__stars`}>
          &#9733;
          {destination.stars}
        </div>
      </div>
      { destination.info.price &&
        <div className={`${listType}-list__list-price`}>{destination.info.price}</div> }
    </Link>
  </div>
);

Destination.propTypes = {
  listType: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func,
  destination: appPropTypes.destination.isRequired,
};

Destination.defaultProps = {
  onClickHandle: null,
};

export default Destination;
