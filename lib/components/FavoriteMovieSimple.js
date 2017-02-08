import React, { Component } from 'react';

export default class FavoriteMovie extends Component {
  render() {
    return (
      <section className='favorite-movie-card-container'>
        <article className='favorite-movie-card-simple'>
          <img className='favorite-image-simple' src={'https://image.tmdb.org/t/p/w500/' + this.props.image}/>
        </article>
      </section>
    );
  }
}
