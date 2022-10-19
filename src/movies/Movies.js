import React from 'react';
import './Movies.css';
import Card from '../card/Card';

const Movies = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
      />
    );
  });

  return <div className="movies-container">{movieCards}</div>;
};

export default Movies;
