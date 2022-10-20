import React, { Component } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../api';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount = async () => {
    try {
      const currentMovie = await fetchMovie(this.props.movieId);
      if (!currentMovie.ok) {
        throw new Error(`${currentMovie.status} Error please try again`);
      }
      const data = await currentMovie.json();
      this.setState({ movie: data.movie });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  validateMovieInfo = (key) => {
    return !this.state.movie[key] ? 'Info is pending' : this.state.movie[key];
  };

  displayGenres = () => {
    return !this.state.movie.genres.length
      ? 'Info is pending'
      : this.state.movie.genres.join(' | ');
  };

  render = () => {
    if (!this.state.movie) {
      return <h2 className="error-message">{this.state.error}</h2>;
    }
    return (
      <div
        to={`/${this.state.movie.id}`}
        className="current-movie"
        id={this.state.movie.id}
      >
        {this.state.error && (
          <h2 className="error-message">{this.state.error}</h2>
        )}

        <Link to="/">
          <button
            className="close-btn"
            aria-label={`close ${this.state.movie.title}`}
          >
            ✕
          </button>
        </Link>
        <img
          className="inner-poster-img"
          src={this.state.movie.poster_path}
          alt={`poster of ${this.state.movie.title} movie`}
        />
        <div className="movie-body">
          <h2 className="movie-title">{this.state.movie.title}</h2>
          <div className="movie-details">
            <h3 className="movie-rating">
              Rating: {this.state.movie.average_rating.toFixed(2)}/10
            </h3>
            <h3 className="movie-release">
              Released: {this.state.movie.release_date.slice(0, 4)}
            </h3>
            <h3 className="movie-runtime">
              Runtime: {this.state.movie.runtime} minutes
            </h3>
            <h3 className="movie-genre">Genre: {this.displayGenres()}</h3>
          </div>
          <h3>Summary: </h3>
          <p className="movie-overview">{this.validateMovieInfo('overview')}</p>
        </div>
      </div>
    );
  };
}

export default Details;
