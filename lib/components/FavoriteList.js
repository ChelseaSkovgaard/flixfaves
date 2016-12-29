import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
const $ = require('jquery');
import IndividualMovie from './IndividualMovie';
import MovieDetail from './MovieDetail';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';
import FavoriteMovie from './FavoriteMovie';

class FavoriteList extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      favorites: [],
      favoritesDisplay: '',
      movieDatabase: null
    }
  }

  componentWillMount() {
    let user = this.props.user
    let favorites = this.props.favorites
    let movieDatabase = this.props.movieDatabase
    this.setState({user:user, movieDatabase:movieDatabase, favorites:favorites})
}

  render(){
    let favorites = this.state.favorites
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
      Favorites Page
      <section> {favoritesDisplay} </section>
      </div>
    )
}
}

module.exports = FavoriteList;
