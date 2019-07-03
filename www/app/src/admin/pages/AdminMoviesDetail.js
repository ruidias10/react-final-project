import React from 'react';
import Player from '../components/Player';

//media: {poster: "http://localhost:8080/app/images/avengers-endgame.jpg", image: "http://localhost:8080/app/images/16x9.jpg", clip: "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZj…jg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg", trailer: "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZj…jg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg", timestampClip: "String", …}
//meta: {likes: 0, stars: 0, views: 0}

const AdminMoviesDetail = ({data}) => (
  <div>
    <div className="alignLeft">
      <div className="container">
        <div className="mt-12">
          <div className="card mb-8 wow fadeIn">
            <Player src={data.media.clip} poster={data.media.poster} />
          </div>

          <div className="card-body">
            <h1>{data.title}</h1>
            <p><b>Actors:</b> {data.actors}</p>
            <p><b>Category:</b> {data.category}</p>
            <p><b>Country:</b> {data.country}</p>
            <p><b>Description:</b> {data.description}</p>
            <p><b>Director:</b> {data.director}</p>
            <p><b>Language:</b> {data.language}</p>
            <p><b>Production:</b> {data.production}</p>
            <p><b>Rewrite:</b> {data.rewrite}</p>
            <p><b>Type:</b> {data.type}</p>
            <p><b>Website:</b> {data.website}</p>
            <p><b>Writer:</b> {data.writer}</p>
            <p><b>Year:</b> {data.year}</p>
          </div>
        </div>
      </div> 
    </div>  

    <div className="alignLeft">
      <div className="card mb-12 wow fadeIn">
        <img src={data.media.poster} width="500" />
      </div>
    </div> 
  </div>
);


export default AdminMoviesDetail;