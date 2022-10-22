import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import Vimeo from '@u-wave/react-vimeo';
import './Details.css';
import { Link } from 'react-router-dom';
import { fetchMovie, fetchVideo } from '../api';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      videoUrl: null,
    };
  }

  componentDidMount = async () => {
    try {
      const currentMovie = await fetchMovie(this.props.movieId);
      const movieVideo = await fetchVideo(this.props.movieId);
      if (!currentMovie.ok || !movieVideo.ok) {
        throw new Error(`${currentMovie.status} Error please try again`);
      }
      const movie = await currentMovie.json();
      const videos = await movieVideo.json();
      this.setState({ movie: movie.movie, videoUrl: videos.videos });
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

  displayEachVideo = () => {
    console.log(this.state.videoUrl.length);
    if (this.state.videoUrl.length > 0) {
      return this.state.videoUrl.map((video) => {
        return video.site === 'YouTube' ? (
          <ReactPlayer
            key={video.id}
            url={`https://www.youtube.com/embed/${video.key}`}
            origin={`${video.site}.com/`}
            width="240px"
            height="auto"
          />
        ) : (
          <Vimeo
            key={video.id}
            video={`${video.key}`}
            width="240px"
            height="auto"
          />
        );
      });
    } else {
      return (
        <h3 className="video-message">
          Sorry, no videos were provided for this movie.
        </h3>
      );
    }
  };

  render = () => {
    console.log(this.state.videoUrl);

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
        <div className="media">
          <img
            className="inner-poster-img"
            src={this.state.movie.poster_path}
            alt={`poster of ${this.state.movie.title} movie`}
          />
          <div className="preview-container">
            <h3 className="preview-header">Select a preview to watch:</h3>
            <div className="video-container">{this.displayEachVideo()}</div>
            <ReactPlayer url="https://vimeo.com/436179361" />
          </div>
        </div>
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
