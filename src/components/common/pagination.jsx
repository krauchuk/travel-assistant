import React from 'react';
import PropTypes from 'prop-types';
import appPropTypes from '../../propTypes';
import '../../scss/pagination.scss';

const Pagination = ({
  values,
  clickHandle,
}) => (
  <div className="pagination-bar">
    <button
      type="button"
      value="prev"
      className={values.hasPrev ? 'pagination-bar__btn--enabled' : 'pagination-bar__btn--disabled'}
      onClick={() => clickHandle(values.currentPage - 1)}
      disabled={!values.hasPrev}
    >
      {'<'}
    </button>
    <span className="pagination-bar__page-number">{values.currentPage}</span>
    <button
      type="button"
      value="next"
      className={values.hasNext ? 'pagination-bar__btn--enabled' : 'pagination-bar__btn--disabled'}
      onClick={() => clickHandle(values.currentPage + 1)}
      disabled={!values.hasNext}
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
