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
      dateToday: '',
      datePast: '',
      dateFuture: ''
    }
  }

  componentWillMount() {
    let date = moment().format('YYYY-MM-DD');
    let dateToday = moment(date).calendar();
    let datePast = moment(date).subtract(28, 'days').format('YYYY-MM-DD');
    let dateFuture = moment(date).add(7, 'days').calendar();
    this.setState({dateToday: dateToday, datePast: datePast, dateFuture: dateFuture});
  }
  componentDidMount() {
    this.findReminderMovies()
    this.findCurrentMovies()
  }

  findReminderMovies() {
    let moviesWithReminders = filter(this.props.favorites, (movie) => {
      return movie.reminder === true
      // date needs be greater than current date minus 4 weeks
      // or less than the current date + one week
    });
    this.setState({moviesWithReminders: moviesWithReminders});
    console.log(this.state.moviesWithReminders)
  }

  findCurrentMovies() {
    let pastDate = (this.state.datePast).toString()
    let currentMovies = filter(this.props.favorites, (movie) => {
      return moment(movie.date).isAfter(pastDate)
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
    return(
      <div>
        <section className="available-saved-movies">
          <h4>Saved Movies Currently in Theaters</h4>
          <article></article>
        </section>
        <section className="upcoming-saved-movies">
          <h4>Upcoming Saved Movies</h4>
          <article></article>
        </section>
        <section className="saved-movies">
          <h4> Saved Movies </h4>
          <article> {favoritesDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = FavoriteList;
