import React from 'react';
import './Details.css';

const Details = ({ movieDetails, closeMovie }) => {
  const { id, poster_path, title, average_rating, release_date } = movieDetails;

  return (
    <div className="current-movie" id={id}>
      <button className="close-movie" onClick={closeMovie}>
        ✕
      </button>
      <div className="body">
        <h2>{title}</h2>
        <p>
          Rating: {average_rating.toFixed(2)}/10 | Released:
          {release_date.slice(0, 4)} | Runtime: | Genre:
        </p>
        <p>Movie Overview: </p>
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
