import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
const $ = require('jquery');
import IndividualMovie from './IndividualMovie';
import MovieDetail from './MovieDetail';
import firebase, { reference } from '../firebase';
import {filter, map, extend} from 'lodash';

class FavoriteList extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      favorites: []
    }
  }

  componentWillMount() {
    let user = this.props.user
    this.setState({user:user})

    firebase.database().ref('favorites').on('value', (snapshot) => {
    const favorites = snapshot.val() || {};
    this.setState({
      favorites: map(favorites, (val, key) => extend(val, {key})),
    });
  })
}

  //sort the movies - via user
  //display the results -
  //button for delete, reminder, watched
  //check if movie has reminder, check release date against today's date


  render(){
    let favorites = (
      <section className='favorites-list'>
        {this.state.favorites.map(m => <article className="individual-favorite">
        Favorite: ${m.favorite}
        </article>)}
      </section>
    )
    return(
      <div>
      Favorites Page
      <section> {favorites} </section>

      </div>
    )
}
}

module.exports = FavoriteList;
