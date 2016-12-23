import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick} from 'lodash';
import { Link } from 'react-router';
import MovieDetail from './MovieDetail.js';

export default class IndividualMovie extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      user: '',
      selectedMovie: ''
    }
  }
  componentWillMount() {
    let id = this.props.movie.id
    let selectedMovie = this.props.selectedMovie
    let user = this.props.user
    this.setState({id:id, user:user})
  }

  saveFavorite() {
    let favorite = this.state.id
    let user = this.state.user
    reference.push({
      favorite:favorite, user:pick(user,'displayName', 'email','uid')
    });
  }

  render() {
    return (
      <article className="search-result" id={(this.props.movie.id)}>
        <img className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path}/>
        <h4 className="movie-title">{this.props.movie.title}</h4>
        <p className="movie-date">
          Release Date: {this.props.movie.release_date}
        </p>
        <p className="movie-description">
          {this.props.movie.overview}
        </p>
        <button onClick={() => this.saveFavorite()}>Favorite</button>
        <button onClick={() => {this.props.getMovieDetail()}}>
        More Detail
        </button>
      </article>

    )
  }
}
