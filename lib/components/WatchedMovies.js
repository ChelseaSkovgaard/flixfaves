import React, { Component } from 'react';
import {filter} from 'lodash';
import FavoriteMovieSimple from './FavoriteMovieSimple';

class WatchedMovies extends Component {
  
  findWatchedMovies() {
    return filter(this.props.favorites, (movie) => {
      return movie.watched === true
    });
  }

  render(){
    let notSignedInMessage;
    if (!this.props.user) {
      notSignedInMessage =
      <article id="not-signed-in">
        To add and view movies, SIGN IN.
      </article>
    } else {
      notSignedInMessage= ''
    }

    let moviesWatched = this.state.moviesWatched
    let moviesWatchedDisplay = (
      <section className='favorites-list'>
        {this.findWatchedMovies().map(m =>
          <FavoriteMovieSimple
           key={m.key} keyID={m.key}
           date={m.date} image={m.image}
           />
        )}
      </section>
    )
    console.log('favorites'+this.props.favorites)
    return(
      <div>
        <section className="saved-movies" id="watched-movies">
          <article>{notSignedInMessage}</article>
          <h4 id="watched-movies-heading"> MY WATCHED MOVIES </h4>
          <article className="watched-movies-list"> {moviesWatchedDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = WatchedMovies;
