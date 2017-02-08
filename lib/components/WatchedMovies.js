import React, { Component } from 'react';
import {filter} from 'lodash';
import FavoriteMovieSimple from './FavoriteMovieSimple';

class WatchedMovies extends Component {

  render(){
    let favorites = this.props.favorites
    let watchedMovies = filter(favorites, (movie) => {
        return movie.watched === true
      });

    let notSignedInMessage;
    if (!this.props.user) {
      notSignedInMessage =
      <article id="not-signed-in">
        To add and view movies, SIGN IN.
      </article>
    } else {
      notSignedInMessage= ''
    }

    let moviesWatchedDisplay = (
      <section className='favorites-list'>
        {watchedMovies.map(m =>
          <FavoriteMovieSimple
           key={m.key} keyID={m.key}
           date={m.date} image={m.image}
           />
        )}
      </section>
    )
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
