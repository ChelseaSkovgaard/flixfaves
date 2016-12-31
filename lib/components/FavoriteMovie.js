import React, { Component } from 'react';
import firebase, { reference } from '../firebase';


export default class FavoriteMovie extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <article>
        <img className="favorite-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.image}/>

        <h4 className="movie-title">{this.props.title}</h4>
        <p className="movie-date">
          Release Date: {this.props.date}

        </p>
        <button className="reminder-btn" onClick={() =>
          this.props.setMovieReminder(this.props.keyID)}>
          Remind Me
          </button>
          <button className="delete-btn"
          onClick={() => this.props.deleteMovie(this.props.keyID)}>
          Delete
          </button>


      </article>

    )
  }
}
