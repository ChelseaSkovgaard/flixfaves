import React, { Component } from 'react';
import moment from 'moment';

export default class TheaterMovie extends Component {
  render() {
    let date = moment(this.props.date).format("MM/DD/YYYY")
    return (
      <section className="favorite-movie-card-container">
        <article className="favorite-movie-card">
          <img className="favorite-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.image}/>
            <aside className="favorite-details">
              <h4 className="favorite-title">
                {this.props.title}
              </h4>
              <p className="favorite-date">
                Release Date: {date}
              </p>
            </aside>
        </article>
      </section>
    )
  }
}
