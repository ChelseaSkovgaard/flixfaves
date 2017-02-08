import React, { Component } from 'react';
import moment from 'moment';

export default class TheaterMovie extends Component {
  render() {
    let date = moment(this.props.date).format('MM/DD/YYYY');
    return (
      <section className='theater-movie-card-container'>
        <article className='theater-movie-card'>
          <img className='theater-image' src={'https://image.tmdb.org/t/p/w500/' + this.props.image}/>
            <aside className='favorite-details'>
              <h4 className='theater-title'>
                {this.props.title}
              </h4>
              <p className='theater-date'>
                Release Date: {date}
              </p>
            </aside>
        </article>
      </section>
    );
  }
}
