import React, { Component } from 'react';
import UserItem from '../components/UserItem';
import Pagination from '../components/Pagination';


class AdminUsers extends Component {

  constructor(props) {
    super(props);
    
    this.click = this.props.click;
  }

  renderPagination = (data) => {
    return (<Pagination onClick={this.handlePagination} page={data.page} totalPages={data.totalPages} />);
  }

  renderBody = (useres) => {
    const result = [];

    useres.forEach((user, index) => {
      result.push(<UserItem key={index} name={user.name} email={user.email} type={user.type} />)
    });
    
    return result;
  }

  handlePagination = (e) => {
    this.click(e);
  }
  
  render() {
    return (
      <div className="alignLeft">
        <div className="container-fluid">
          {this.renderBody(this.props.data.docs)}
          {this.renderPagination(this.props.data)}
        </div>
      </div>   
    );
  }  
}

export default AdminUsers;