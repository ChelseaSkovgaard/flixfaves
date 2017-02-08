import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';
import TheaterMovie from './TheaterMovie';
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
    };
  }

  componentWillMount() {
    let date = moment().format('YYYY-MM-DD');
    let dateToday = moment(date).format('YYYY-MM-DD');
    let dateTodayPlus = moment(date).add(1,'days').format('YYYY-MM-DD');
    let datePast = moment(date).subtract(35, 'days').format('YYYY-MM-DD');
    let dateFuture = moment(date).add(7, 'days').calendar();
    this.setState({dateToday: dateToday, dateTodayPlus: dateTodayPlus,
      datePast: datePast, dateFuture: dateFuture});
  }

  componentDidMount() {
    this.findCurrentMovies();
    this.findUpcomingMovies();
  }

  findUpcomingMovies() {
    let futureDate = (this.state.dateFuture).toString();
    let dateToday = (this.state.dateToday).toString();
    let upcomingMovies = filter(this.props.favorites, (movie) => {
      return moment(movie.date).isAfter(dateToday) && moment(movie.date).isBefore(futureDate);
    });
    this.setState({upcomingMovies: upcomingMovies});
  }

  findCurrentMovies() {
    let pastDate = (this.state.datePast).toString();
    let dateTodayPlus = (this.state.dateTodayPlus).toString();
    let currentMovies = filter(this.props.favorites, (movie) => {
      return moment(movie.date).isAfter(pastDate) && moment(movie.date).isBefore(dateTodayPlus);
    });
    this.setState({currentMovies: currentMovies});
  }

  render(){
    let upcomingMovies = this.state.upcomingMovies;
    let upcomingDisplay = (
      <section className='upcoming-list'>
        {upcomingMovies.map(m =>
          <TheaterMovie
           key={m.key} keyID={m.key}
           title={m.title} overview={m.overview}
           date={m.date} image={m.image}
           deleteMovie={this.props.deleteMovie}
           setMovieWatched={this.props.setMovieWatched}
           />
        )}
      </section>
    );

    let currentMovies = this.state.currentMovies;
    let currentDisplay = (
      <section className='current-list'>
        {currentMovies.map(m =>
          <TheaterMovie
           key={m.key} keyID={m.key}
           title={m.title} overview={m.overview}
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
      <article id="fav-not-signed-in">
        To add and view movies, SIGN IN.
      </article>
    } else {
      notSignedInMessage= '';
    }

    return(
      <section id="favorite-movies-page">
        <article>{notSignedInMessage}</article>
        <article id="favorite-nav-links">
          <Link className="fav-page-link" to='/allmovies'>
            All My Movies
          </Link>
          <Link className="fav-page-link" to='/watchedmovies'>
            Watched Movies
          </Link>
        </article>
        <h4 className="movie-heading">MY MOVIES IN THEATERS</h4>
        <section className="available-saved-movies">
          <article id="current-movie-display">
            {currentDisplay}
          </article>
        </section>
        <h4 className="movie-heading">MY UPCOMING MOVIES</h4>
        <section className="available-saved-movies">
          <article id="current-movie-display">
            {upcomingDisplay}
          </article>
        </section>
      </section>
    );
  }
}

module.exports = FavoriteList;
