import React from 'react';
import * as Types from '../../types';
import '../../scss/pagination.scss';

interface Props {
  values: Types.pagination;
  clickHandle: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  values: {
    hasPrev,
    hasNext,
    currentPage,
  },
  clickHandle,
}: Props) => (
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

export default Pagination;
