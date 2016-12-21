import React, { Component } from 'react';

export default class IndividualMovie extends Component {
  render() {
    return (
      <article key={this.props.movie.id}>
        <img className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path}/>
        <h4 className="movie-title">{this.props.movie.title}</h4>
        <p className="movie-date">
          Release Date: {this.props.movie.release_date}
        </p>
        <p className="movie-description">
          {this.props.movie.overview}
        </p>
      </article>
    )
  }
}
