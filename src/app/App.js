import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from '../movies/Movies';
import Details from '../card/Details';
import './App.css';
import { fetchAllMovies } from '../api.js';
import tomato from './tomato.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    try {
      const movieList = await fetchAllMovies();
      const data = await movieList.json();
      this.setState({ movies: data.movies });
    } catch (error) {
      this.setState({
        error: 'There was a problem getting your data. Please try again.',
      });
    }
  };

  render() {
    return (
      <main>
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
          <div className="divider">
            {!this.state.movies.length && (
              <img
                className="ball tomato-icon"
                src={tomato}
                alt="rolling tomato"
              />
            )}
          </div>
        </header>
        {this.state.error && (
          <h2 className="error-message">{this.state.error}</h2>
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Movies movies={this.state.movies} />}
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
