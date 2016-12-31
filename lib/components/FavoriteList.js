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
      date: ''
    }
  }

  componentDidMount() {
    let date = moment().format('YYYY-MM-DD');
    this.findReminderMovies()
  }
  findReminderMovies() {
    let moviesWithReminders = filter(this.props.favorites, (movie) => {
      return movie.reminder === true
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
        <section className="saved-movies">
          <h4> Saved Movies </h4>
          <article> {favoritesDisplay} </article>
        </section>
      </div>
    )
}
}

module.exports = FavoriteList;
