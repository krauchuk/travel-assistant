import React from 'react';
import '../scss/pagination.scss';
import '../scss/buttons.scss';

const pagination = ({
  currentPage,
  hasNext,
  hasPrev,
  clickHandle,
}) => (
  <div className="pagination-bar">
    <button type="button"
      value="prev"
      className={hasPrev ? 'pagination-btn-enabled' : 'pagination-btn-disabled'}
      onClick={clickHandle}
      disabled={!hasPrev}
    >
      {'<'}
    </button>
    <span className="page-number">{currentPage}</span>
    <button type="button"
      value="next"
      className={hasNext ? 'pagination-btn-enabled' : 'pagination-btn-disabled'}
      onClick={clickHandle}
      disabled={!hasNext}
    >
      {'>'}
    </button>
  </div>
);

export default pagination;
