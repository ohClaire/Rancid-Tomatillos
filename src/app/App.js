import React, { Component } from 'react';
import movieData from '../sample-data';
import Movies from '../movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = movieData
  }

  render() {
    return (
      <main>
      <h1>Rancid Tomatillos</h1>
      <Movies movies={this.state.movies}/>
      </main>
    );

  }
}

export default App;
