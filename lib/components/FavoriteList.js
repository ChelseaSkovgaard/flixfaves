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
      date: '',
      dateFuture: ''
    }
  }

  componentDidMount() {
    let dateToday = moment().format('YYYY-MM-DD')
    let date = moment(dateToday).subtract(28, 'days').calendar();
    let dateFuture = moment(dateToday).add(7, 'days').calendar();
    this.setState({date: date, dateFuture: dateFuture});
    this.findReminderMovies()
  }

  findReminderMovies() {
    let moviesWithReminders = filter(this.props.favorites, (movie) => {
      return movie.reminder === true
      // date needs be greater than current date minus 4 weeks
      // or less than the current date + one week
    });
    this.setState({moviesWithReminders: moviesWithReminders});
  }

  render(){
    let favorites = this.props.favorites
    let favoritesDisplay = (
      <section className='favorites-list'>
        {favorites.map(m =>
          <FavoriteMovie
           key={m.key} keyID={m.key} title={m.title} overview={m.overview} date={m.date} image={m.image} deleteMovie={this.props.deleteMovie} setMovieReminder={this.props.setMovieReminder}/>
        )}
      </section>
    )
    return(
      <div>
        <section className="upcoming-saved-movies">
          <h4>Upcoming and Currently in Theaters Saved Movies</h4>
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
