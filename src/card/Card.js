import React from 'react';
import './Card.css';

const Card = ({ title, poster, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        className="poster-img"
        alt={`movie poster for ${title}`}
        src={poster}
      />
    </div>
  );
};

export default Card;
