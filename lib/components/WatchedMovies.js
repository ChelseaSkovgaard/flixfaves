import React, { Component } from 'react';
import {filter} from 'lodash';
import FavoriteMovie from './FavoriteMovie';

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
          <h4 id="watched-movies-heading"> MY WATCHED MOVIES </h4>
          <article> {moviesWatchedDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = WatchedMovies;
