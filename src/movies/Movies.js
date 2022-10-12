import React from 'react';
import './Movies.css';

const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <button>
        <Card 
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          backdrop={movie.backdrop_path}
          rating={movie.average_rating}
          release={movie.release_date}
        />
      </button>
  )})

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;