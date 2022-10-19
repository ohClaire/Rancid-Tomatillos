import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

const Details = ({ movieDetails, closeMovie }) => {
  console.log(movieDetails);
  const {
    id,
    poster_path,
    title,
    average_rating,
    release_date,
    runtime,
    overview,
    genres,
  } = movieDetails;

  return (
    <div to={`/${id}`} className="current-movie" id={id}>
      <button className="close-btn" onClick={closeMovie}>
        ✕
      </button>
      <img
        className="inner-poster-img"
        src={poster_path}
        alt={`poster of ${title} movie`}
      />
      <div className="movie-body">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-details">
          <h3 className="movie-rating">
            Rating: {average_rating.toFixed(2)}/10
          </h3>
          <h3 className="movie-release">
            Released: {release_date.slice(0, 4)}
          </h3>
          <h3 className="movie-runtime">Runtime: {runtime} minutes</h3>
          <h3 className="movie-genre">Genre: {genres[0]}</h3>
        </div>
        <h3>Summary: </h3>
        <p className="movie-overview">{overview}</p>
      </div>
    </div>
  );
};

export default Details;
