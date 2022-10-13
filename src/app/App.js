import React, { Component } from 'react';
//import movieData from '../sample-data';
import Movies from '../movies/Movies';
import Details from '../card/Details';
import './App.css';
import fetchData from '../api.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: null,
    };
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      );
      if (!response.ok) {
        console.log(response.status);
        throw new Error('Sorry, an error occured');
      }
      const data = await response.json();
      this.setState({ movies: data.movies });
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    }
  };

  showMovie = async (movieID) => {
    // const currentMovie = this.state.movies.find(
    //   (movie) => movie.id === movieID
    // );
    // this.setState({ movie: currentMovie });
    console.log(movieID);
    const currentMovie = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_${movieID}`
    );
    const data = await currentMovie.json();
    this.setState({ movie: data.movies });
    console.log('current', currentMovie);
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
          <Movies movies={this.state.movies} showMovie={this.showMovie} />
        )}
      </main>
    );
  }
}

export default App;
