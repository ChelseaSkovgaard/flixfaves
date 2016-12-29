import React, { Component } from 'react';
import firebase, { reference } from '../firebase';


export default class FavoriteMovie extends Component {
  constructor(){
    super();
  }

  render() {
    const {movie} = this.props
    return (
      <article>
        <h4 className="movie-title">{this.props.title}</h4>
        <p className="movie-date">
          Release Date: {this.props.date}
        </p>

          <button className="delete-btn" onClick={() => this.props.deleteMovie(this.props.keyID)}> Delete </button>

      </article>

    )
  }
}
