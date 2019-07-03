import React from 'react';
import { Link } from 'react-router-dom'

const MovieItem = ({title, description, route, img}) => (
  <div>
    <div className="row">
      <div className="col-md-2">
        <Link to={route}>
          <img className="img-fluid rounded mb-3 mb-md-0" src={img} alt={title} />
        </Link>
      </div>
      <div className="col-md-4">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="btn btn-primary" to={route}>Edit Movie</Link>
      </div>
    </div>
    
    <hr />
  </div>
);

export default MovieItem;