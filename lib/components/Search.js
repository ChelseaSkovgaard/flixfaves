import React, { Component } from 'react';


export default class Search extends Component {
  render() {
    return (
      <input placeholder="search" onChange={(e) => {this.props.setMovieSearch(e.target.value)}}/>
    )
  }
}
