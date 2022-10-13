import React from 'react';
import './Card.css';

const Card = ({ id, title, poster, backdrop, rating, release, onClick }) => {
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
//const backdropImg =  {background-img: URL(backdrop)}

export default Card;
