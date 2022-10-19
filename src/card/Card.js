import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, poster, id }) => {
  return (
    <Link to={`/${id}`} className="card">
      <img
        key={id}
        className="poster-img"
        alt={`movie poster for ${title}`}
        src={poster}
      />
    </Link>
  );
};

export default Card;
