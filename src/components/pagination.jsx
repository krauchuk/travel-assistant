import React from 'react';
import '../scss/pagination.scss';
import '../scss/buttons.scss';

const Pagination = ({
  values,
  clickHandle,
}) => (
  <div className="pagination-bar">
    <button type="button"
      value="prev"
      className={values.hasPrev ? 'pagination-btn-enabled' : 'pagination-btn-disabled'}
      onClick={() => clickHandle(values.currentPage - 1)}
      disabled={!values.hasPrev}
    >
      {'<'}
    </button>
    <span className="page-number">{values.currentPage}</span>
    <button type="button"
      value="next"
      className={values.hasNext ? 'pagination-btn-enabled' : 'pagination-btn-disabled'}
      onClick={() => clickHandle(values.currentPage + 1)}
      disabled={!values.hasNext}
    >
      {'>'}
    </button>
  </div>
);

export default Pagination;
