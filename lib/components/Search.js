import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <input id="search-movies" placeholder="Search Movies" onChange={(e) => {this.props.setMovieSearch(e.target.value)}}/>
    )
  }
}
