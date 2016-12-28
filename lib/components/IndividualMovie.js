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
      title: '',
      date: '',
      image: '',
      overview: '',
      selectedMovie: ''
    }
  }
  componentWillMount() {
    let id = this.props.movie.id
    let title = this.props.movie.title
    let date = this.props.movie.release_date
    let image = this.props.movie.poster_path
    let overview = this.props.movie.overview
    let selectedMovie = this.props.selectedMovie
    let user = this.props.user
    this.setState({id:id, title:title, date: date, image:image, overview:overview, user:user})
  }

  saveFavorite() {
    let favorite = this.state.id
    let title = this.state.title
    let date = this.state.date
    let image = this.state.image
    let overview = this.state.overview
    let user = this.state.user
    reference.push({
      favorite:favorite, title:title, date:date, image:image, overview:overview, reminder: false, watched: false, user:pick(user,'displayName', 'email','uid')
    });
  }

  render() {
    let id = this.props.movie.id
    let overview = this.props.movie.overview
    return (
      <article className="search-result" id={(this.props.movie.id)}>
      <span><button className="favorite-btn" onClick={() => this.saveFavorite()}>Favorite</button></span>
        <img className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path}/>
        <h4 className="movie-title">{this.props.movie.title}</h4>
        <p className="movie-date">
          Release Date: {this.props.movie.release_date}
        </p>
        <p className="movie-description">
          {overview.substring(0, 100)}<span>...</span>
          <button className="more-btn" onClick={() => {this.props.getMovieDetail(id)}}>
          More
          </button>
        </p>


      </article>

    )
  }
}
