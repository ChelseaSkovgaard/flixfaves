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
      moviesWithReminders:[],
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
    this.findReminderMovies();
    this.findCurrentMovies();
    this.findUpcomingMovies();
  }

  findReminderMovies() {
    let moviesWithReminders = filter(this.props.favorites, (movie) => {
      return movie.reminder === true
    });
    this.setState({moviesWithReminders: moviesWithReminders});
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
           setMovieReminder={this.props.setMovieReminder}/>
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
           setMovieReminder={this.props.setMovieReminder}/>
        )}
      </section>
    )
    return(
      <div>
        <section className="available-saved-movies">
          <h4>Current Saved Movies in Theaters</h4>
          <article> {currentDisplay} </article>
        </section>

        <section className="saved-movies">
          <h4> Saved Movies </h4>
          <article> {favoritesDisplay} </article>
        </section>
        <Link to='/allmovies'>
          All My Movies
        </Link>
        <Link to='/watchedmovies'>
          Watched Movies
        </Link>
      </div>
    )
}
}

module.exports = FavoriteList;
