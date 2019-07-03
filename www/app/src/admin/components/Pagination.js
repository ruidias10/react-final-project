import React from 'react';

class Pagination extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.page = this.props.page;
    this.onClick = this.props.onClick;
    this.totalPages = this.props.totalPages;
  }
  
  isLinkActive = (page, index) => page === index;
  
  renderNumbersPages = (page, totalPages) => {
    const result = [];
    
    for (let index=1; index<=totalPages; index++) {
      result.push(
        <li key={index} className={"page-item" + (this.isLinkActive(page, index) ? " active" : "")}>
          <a data-index={index} className="page-link" href="#" onClick={this.handleNavigationClick}>{index}</a>
        </li>)
    }  
    
    return result;
  }
  
  renderFirstOrLastPage = (index, totalPages, label, icon) => {
    if (index < 1) index = 1;
    else if(index > totalPages) index = totalPages;
    
    return(
      <li className="page-item">
        <a data-index={index} className="page-link" href="#" onClick={this.handleNavigationClick} aria-label={label}>
          <span aria-hidden="true">{icon}</span>
          <span className="sr-only">{label}</span>
        </a>
      </li>    
    );
  }
  
  handleNavigationClick = (e) => {
    e.preventDefault();
    this.onClick(e.currentTarget.dataset.index);
  }; 
  
  render() {
    if (this.totalPages > 1){
      return (
        <ul className="pagination justify-content-center">
          {this.renderFirstOrLastPage((this.page-1), this.totalPages, 'Previous', '«')}
          {this.renderNumbersPages(this.page, this.totalPages)}
          {this.renderFirstOrLastPage((this.page+1), this.totalPages, 'Next', '»')}
        </ul>
      );
    } else {
      return (<ul className="pagination justify-content-center"></ul>);
    }
  }
}

export default Pagination;