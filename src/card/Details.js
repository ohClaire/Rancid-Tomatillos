import React from 'react';
import './Details.css';

const Details = ({
  id,
  title,
  poster,
  backdrop,
  rating,
  release,
  closeMovie,
}) => {
  const divStyle = {
    backgroundImage: 'url(' + backdrop + ')',
    width: 100 + '%',
    height: 100 + '%',
  };

  return (
    <div className="current-movie" style={divStyle}>
      <button className="close-movie" onClick={closeMovie}>
        ✕
      </button>
      <div className="body">
        <h2>{title}</h2>
        <p>
          Rating: {rating.toFixed(2)}/10 | Released: {release} | Runtime
        </p>
        <p>Movie Overview goes here</p>
      </div>
      <img
        className="inner-poster-img"
        src={poster}
        alt={`poster of ${title} movie`}
      />
    </div>
  );
};

export default Details;
