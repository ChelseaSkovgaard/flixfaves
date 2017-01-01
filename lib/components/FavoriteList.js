import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';
import FavoriteMovie from './FavoriteMovie';
import moment from 'moment';

class FavoriteList extends Component {
  constructor(){
    super();
    this.state = {
      currentMovies: [],
      upcomingMovies: [],
      dateToday: '',
      dateTodayPlus: '',
      datePast: '',
      dateFuture: ''
    }
  }

  componentWillMount() {
    let date = moment().format('YYYY-MM-DD');
    let dateToday = moment(date).format('YYYY-MM-DD');
    let dateTodayPlus = moment(date).add(1,'days').format('YYYY-MM-DD');
    let datePast = moment(date).subtract(28, 'days').format('YYYY-MM-DD');
    let dateFuture = moment(date).add(7, 'days').calendar();
    this.setState({dateToday: dateToday, dateTodayPlus: dateTodayPlus, datePast: datePast, dateFuture: dateFuture});
  }

  componentDidMount() {
    this.findCurrentMovies();
    this.findUpcomingMovies();
  }

  findUpcomingMovies() {
    let futureDate = (this.state.dateFuture).toString()
    let dateToday = (this.state.dateToday).toString()
    let upcomingMovies = filter(this.props.favorites, (movie) => {
      return moment(movie.date).isAfter(dateToday) && moment(movie.date).isBefore(futureDate)
    });
    this.setState({upcomingMovies: upcomingMovies});
  }

  findCurrentMovies() {
    let pastDate = (this.state.datePast).toString()
    let dateTodayPlus = (this.state.dateTodayPlus).toString()
    let currentMovies = filter(this.props.favorites, (movie) => {
      return moment(movie.date).isAfter(pastDate) && moment(movie.date).isBefore(dateTodayPlus)
    });
    this.setState({currentMovies: currentMovies});
  }

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
    let currentMovies = this.state.currentMovies
    let currentDisplay = (
      <section className='current-list'>
        {currentMovies.map(m =>
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
      <section id="favorite-movies-page">
        <h4 id="current-movies-heading">Current Saved Movies in Theaters</h4>

        <section className="available-saved-movies">
          <article id="current-movie-display"> {currentDisplay} </article>
        </section>

        <Link className="add-fav-page-link" to='/allmovies'>
          All My Movies
        </Link>

        <Link className="add-fav-page-link" to='/watchedmovies'>
          Watched Movies
        </Link>
        
      </section>
    )
}
}

module.exports = FavoriteList;
