import React from 'react';
import './Details.css';

const Details = ({ movieDetails, closeMovie }) => {
  const { id, poster_path, title, average_rating, release_date, runtime, overview } = movieDetails;

  return (
    <div className="current-movie" id={id}>
      <button className="close-btn" onClick={closeMovie}>
        ✕
      </button>
      <div className="movie-body">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-details">
          <h3>
            Rating: {average_rating.toFixed(2)}/10 | Released: 
            {release_date.slice(0, 4)}
          </h3>
          <h3>Runtime: {runtime} minutes</h3>
          <h3>Genre:</h3>
        </div>
        <h3>Summary: </h3>
        <p>
          {overview}
        </p>
      </div>
      <img
        className="inner-poster-img"
        src={poster_path}
        alt={`poster of ${title} movie`}
      />
    </div>
  );
};

export default Details;
