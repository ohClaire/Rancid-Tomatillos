import React from 'react';
import './Movies.css';
import Card from '../card/Card';

const Movies = ({ movies, searchedMovie }) => {
  let movieCards
  if (searchedMovie !== '') {
     movieCards = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
    );
  } else {
    movieCards = movies
  }
  const displayedMovies = movieCards.map((movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
      />
    );
  });

  return <div className="movies-container">{displayedMovies}</div>;
};

export default Movies;
