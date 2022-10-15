import React, { Component } from 'react';
//import movieData from '../sample-data';
import Movies from '../movies/Movies';
import Details from '../card/Details';
import './App.css';
import fetchData from '../api.js';
import tomato from './tomato.png';

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
      const movieList = await fetchData();
      this.setState({ movies: movieList });
    } catch (error) {
      this.setState({
        error: 'There was a problem getting your data. Please try again.',
      });
    }
  };

  // showMovie = (movieID) => {
  //   const currentMovie = this.state.movies.find(
  //     (movie) => movie.id === movieID
  //   );
  //   this.setState({ movie: currentMovie });
  // };

  showMovie = async (movieID) => {
  //   const currentMovie = this.state.movies.find(
  //     (movie) => movie.id === movieID
  //   );
  //   this.setState({ movie: currentMovie });
  // console.log(movieID);
  let currentMovie
  try {
     currentMovie = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
    );
    console.log(currentMovie);
    if (currentMovie.status >= 500) {
      console.log('inside if block');
      throw new Error('something went wrong');
    }   
    const data = await currentMovie.json();
    console.log('data' , data)
    this.setState({ movie: data.movie });
    console.log('current', this.state.movie);
  } catch (error) {
    console.log(error);
    this.setState({ error: '500 error' });
  }  
  
  };

  closeMovie = () => {
    this.setState({ movie: null });
  };

  render() {

    let content;
    if (this.state.error) {
      content = <h2 className="error-message">{this.state.error}</h2>;
    } else if (this.state.movie) {
      content = (
        <Details movieDetails={this.state.movie} closeMovie={this.closeMovie} />
      );
    } else {
      content = (
        <Movies movies={this.state.movies} showMovie={this.showMovie} />
      );
    }

    return (
      <main>
        <header className="header">
          <div className="container">
            <h1 className="heading-title h1">Rancid</h1>
            <h2 className="heading-title h2">Tomatillos</h2>
          </div>
        </header>
        {this.state.movies.length && content}
      </main>
    );
  }
}

export default App;
