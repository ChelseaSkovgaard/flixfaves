import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';
import FavoriteMovie from './FavoriteMovie';
import moment from 'moment';

class AllMovies extends Component {
  render(){
    let favorites = this.props.favorites;
    let favoritesDisplay = (
      <section className='favorites-list'>
        {favorites.map(m =>
          <FavoriteMovie
           key={m.key} keyID={m.key} title={m.title} overview={m.overview}
           date={m.date} image={m.image}
           deleteMovie={this.props.deleteMovie}
           setMovieWatched={this.props.setMovieWatched}
          />
        )}
      </section>
    );
    let notSignedInMessage;
    if (!this.props.user) {
      notSignedInMessage =
      <article id='not-signed-in'>
        To add and view movies, SIGN IN.
      </article>;
    } else {
      notSignedInMessage= '';
    }
    return(
      <section>
        <article className='saved-movies'>
          <article>
          {notSignedInMessage}
          </article>
          <h4 id='all-movies-heading'>
            ALL MY MOVIES
          </h4>
          <article>
            {favoritesDisplay}
          </article>
        </article>
      </section>
    );
  }
}

module.exports = AllMovies;
