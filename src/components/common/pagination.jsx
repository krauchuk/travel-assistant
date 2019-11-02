import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import '../../scss/pagination.scss';

const Pagination = ({
  values: {
    hasPrev,
    hasNext,
    currentPage,
  },
  clickHandle,
}) => (
  <div className="pagination-bar">
    <button
      type="button"
      value="prev"
      className={hasPrev ? 'pagination-bar__btn--enabled' : 'pagination-bar__btn--disabled'}
      onClick={() => clickHandle(currentPage - 1)}
      disabled={!hasPrev}
    >
      {'<'}
    </button>
    <span className="pagination-bar__page-number">{currentPage}</span>
    <button
      type="button"
      value="next"
      className={hasNext ? 'pagination-bar__btn--enabled' : 'pagination-bar__btn--disabled'}
      onClick={() => clickHandle(currentPage + 1)}
      disabled={!hasNext}
    >
      {'>'}
    </button>
  </div>
);

Pagination.propTypes = {
  values: appPropTypes.pagination,
  clickHandle: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  values: {
    hasPrev: false,
    hasNext: false,
    currentPage: 0,
  },
};

export default Pagination;
