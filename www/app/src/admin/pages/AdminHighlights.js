import React, { Component } from 'react';
import MovieItem from '../components/MovieItem';
import Pagination from '../components/Pagination';
import { Context } from '../../store/Context';

class AdminHighlights extends Component {

  constructor(props) {
    super(props);
    
    this.click = this.props.click;
  }

  renderPagination = (data) => {
    return (<Pagination onClick={this.handlePagination} page={data.page} totalPages={data.totalPages} />);
  }

  renderBody = (highlights) => {
    const result = [];
    
    highlights.forEach((highlight, index) => {
      let movie = this.context.findMovieById(highlight.movie[0]['movie']);
      result.push(<MovieItem key={index} title={movie.title} description={movie.description} route={`/admin/movies/${movie._id}`} routes={movie._id} img={movie.media.poster} />)
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

AdminHighlights.contextType = Context;

export default AdminHighlights;