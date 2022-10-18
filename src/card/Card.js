import React from 'react';
import './Card.css';

const Card = ({ title, poster }) => {
  return (
    <div className="card">
      <img
        className="poster-img"
        alt={`movie poster for ${title}`}
        src={poster}
      />
    </div>
  );
};

export default Card;
