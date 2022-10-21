import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render = () => {
    return (
      <div>
        <form
          className="search-bar-form"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.searchMovie(this.state.search);
          }}
        >
          <label htmlFor="search-bar"></label>
          <input
            className="search-input"
            type="text"
            placeholder="Search Movie Here"
            name="search-bar"
            onChange={this.handleChange}
          />
          <button className="search-button">🔍</button>
        </form>
      </div>
    );
  };
}

export default Search;
