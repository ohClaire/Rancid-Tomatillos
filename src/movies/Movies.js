import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movies.css';
import Card from '../card/Card';

const Movies = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      // <NavLink to={`/${movie.id}`} className="movie-card-btn">
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
      />
      // </NavLink>
    );
  });

  return <div className="movies-container">{movieCards}</div>;
};

export default Movies;
