import React, { PureComponent } from 'react';
import PaginationBar from '../components/pagination';

class Pagination extends PureComponent {
  clickHandle = (event) => {
    const { changePageFunc, values } = this.props;
    if(event.target.value === 'next') {
      changePageFunc(values.currentPage + 1);
    } else {
      changePageFunc(values.currentPage - 1);
    }
  }

  render() {
    const { values } = this.props;
    return (
      <PaginationBar
        currentPage={values.currentPage}
        hasNext={values.hasNext}
        hasPrev={values.hasPrev}
        clickHandle={this.clickHandle}
      />
    )
  }
}

export default Pagination;
