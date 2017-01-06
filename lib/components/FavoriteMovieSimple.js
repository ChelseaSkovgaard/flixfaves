import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import moment from 'moment';

export default class FavoriteMovie extends Component {
  render() {
    let date = moment(this.props.date).format("MM/DD/YYYY")
    return (
      <section className="favorite-movie-card-container">
        <article className="favorite-movie-card-simple">
          <img className="favorite-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.image}/>
        </article>
      </section>
    )
  }
}
