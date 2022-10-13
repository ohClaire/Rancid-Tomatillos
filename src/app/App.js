import React, { Component } from 'react';
import movieData from '../sample-data';
import Movies from '../movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = movieData;
  }

  render() {
    return (
      <main>
        <div className="container">
          <h1 className="heading">Rancid</h1>
          <h2 className="heading">Tomatillos</h2>
        </div>
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
