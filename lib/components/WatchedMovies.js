import React, { Component } from 'react';
import {filter} from 'lodash';
import FavoriteMovieSimple from './FavoriteMovieSimple';

class WatchedMovies extends Component {
  constructor(){
    super();
    this.state = {
      moviesWatched:[]
    }
  }

  componentDidMount() {
    this.findWatchedMovies();
  }

  findWatchedMovies() {
    let moviesWatched = filter(this.props.favorites, (movie) => {
      return movie.watched === true
    });
    this.setState({moviesWatched: moviesWatched});
  }

  render(){
    let moviesWatched = this.state.moviesWatched
    let moviesWatchedDisplay = (
      <section className='favorites-list'>
        {moviesWatched.map(m =>
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
          <h4 id="watched-movies-heading"> MY WATCHED MOVIES </h4>
          <article> {moviesWatchedDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = WatchedMovies;
