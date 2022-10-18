import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movies.css';
import Card from '../card/Card';

const Movies = ({ movies, showMovie }) => {
  const movieCards = movies.map((movie) => {
    return (
      // <NavLink className="movie-card-btn" key={movie.id}>
      //   <Card
      //     id={movie.id}
      //     title={movie.title}
      //     poster={movie.poster_path}
      //     backdrop={movie.backdrop_path}
      //     rating={movie.average_rating}
      //     release={movie.release_date}
      //     onClick={() => showMovie(movie.id)}
      //   />
      // </NavLink>
      <h1>hello</h1>
    );
  });

  return <div className="movies-container">{movieCards}</div>;
};

export default Movies;
