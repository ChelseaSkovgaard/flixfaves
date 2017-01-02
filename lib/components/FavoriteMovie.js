import React, { Component } from 'react';
import firebase, { reference } from '../firebase';


export default class FavoriteMovie extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <section className="favorite-movie-card-container">
        <article className="favorite-movie-card">
          <img className="favorite-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.image}/>
            <aside className="favorite-details">
              <h4 className="favorite-title">
                {this.props.title}
              </h4>
              <p className="favorite-date">
                Release Date: {this.props.date}
              </p>
              <button className="watched-btn"
                onClick={() => this.props.setMovieWatched(this.props.keyID)}>
                Watched
              </button>
              <button className="delete-btn"
                onClick={() => this.props.deleteMovie(this.props.keyID)}>
                Delete
              </button>
            </aside>
        </article>
      </section>

    )
  }
}
