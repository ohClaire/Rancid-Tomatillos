import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchAllMovies } from '../api.js';
import Movies from '../movies/Movies';
import Details from '../details/Details';
import Search from '../searchForm/Search';
import tomato from './tomato.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchedMovie: '',
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const movieList = await fetchAllMovies();
      const data = await movieList.json();
      this.setState({ movies: data.movies, loading: false });
    } catch (error) {
      this.setState({
        error: 'There was a problem getting your movies. Please try again.',
      });
    }
  };

  searchMovie = (input) => {
    this.setState({ searchedMovie: input });
  };

  render() {
    return (
      <main>
        <Search searchMovie={this.searchMovie} />
        <header className="header">
          <div className="container">
            <h1 className="heading-title h1">Rancid</h1>
            <h2 className="heading-title h2">
              T
              <img className="tomato-icon" src={tomato} alt="cartoon tomato" />
              matill
              <img className="tomato-icon" src={tomato} alt="cartoon tomato" />s
            </h2>
          </div>
        </header>
        <div className="divider">
          {!this.state.movies.length && (
            <img
              className="ball tomato-icon"
              src={tomato}
              alt="rolling tomato"
            />
          )}
        </div>
        {this.state.error && (
          <h2 className="error-message">{this.state.error}</h2>
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Movies
                movies={this.state.movies}
                searchedMovie={this.state.searchedMovie}
                loading={this.state.loading}
              />
            )}
          />
          <Route
            exact
            path="/:movieId"
            render={({ match }) => {
              return <Details movieId={match.params.movieId} />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
