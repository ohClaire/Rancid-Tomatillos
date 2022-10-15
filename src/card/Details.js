import React from 'react';
import './Details.css';

const Details = ({ movieDetails, closeMovie }) => {
  const { id, poster_path, title, average_rating, release_date } = movieDetails;

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
          <h3>Runtime: </h3>
          <h3>Genre: </h3>
        </div>
        <h3>Summary: </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
