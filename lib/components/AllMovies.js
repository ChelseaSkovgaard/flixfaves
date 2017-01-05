import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';
import FavoriteMovie from './FavoriteMovie';
import moment from 'moment';

class AllMovies extends Component {
  render(){
    let favorites = this.props.favorites
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
    )
    return(
      <div>
        <section className="saved-movies">
          <h4 id="all-movies-heading"> ALL MY MOVIES </h4>
          <article> {favoritesDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = AllMovies;
