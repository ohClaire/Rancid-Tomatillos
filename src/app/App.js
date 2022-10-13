import React, { Component } from 'react';
import movieData from '../sample-data';
import Movies from '../movies/Movies';
import Details from '../card/Details';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData,
      movie: null,
    };
  }

  showMovie = (movieID) => {
    const currentMovie = this.state.movieData.movies.find(
      (movie) => movie.id === movieID
    );
    this.setState({ movie: currentMovie });
  };

  closeMovie = () => {
    this.setState({ movie: null });
  };

  render() {
    return (
      <main>
        <div className="container">
          <h1 className="heading">Rancid</h1>
          <h2 className="heading">Tomatillos</h2>
        </div>
        {this.state.movie ? (
          <Details
            id={this.state.movie.id}
            title={this.state.movie.title}
            poster={this.state.movie.poster_path}
            backdrop={this.state.movie.backdrop_path}
            rating={this.state.movie.average_rating}
            release={this.state.movie.release_date}
            closeMovie={this.closeMovie}
          />
        ) : (
          <Movies
            movies={this.state.movieData.movies}
            showMovie={this.showMovie}
          />
        )}
      </main>
    );
  }
}

export default App;
