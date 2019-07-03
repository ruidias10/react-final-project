import React, { Component } from 'react';
import MovieItem from '../components/MovieItem';
import Pagination from '../components/Pagination';


class AdminMovies extends Component {

  constructor(props) {
    super(props);
    
    this.click = this.props.click;
  }

  renderPagination = (data) => {
    return (<Pagination onClick={this.handlePagination} page={data.page} totalPages={data.totalPages} />);
  }

  renderBody = (movies) => {
    const result = [];

    movies.forEach((movie, index) => {
      result.push(<MovieItem key={index} title={movie.title} description={movie.description} route={movie._id} img={movie.media.poster} />)
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

export default AdminMovies;