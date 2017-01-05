import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick} from 'lodash';
import { Link } from 'react-router';
import MovieDetail from './MovieDetail.js';
import classnames from 'classnames';
import moment from 'moment';

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
      selectedMovie: '',
      activeMovie: false
    }
  }

  componentWillMount() {
    this.prepareState()
  }

  componentWillReceiveProps() {
    this.prepareState()
  }

  prepareState() {
    let user = this.props.user
    let id = this.props.movie.id
    let title = this.props.movie.title
    let date = this.props.movie.release_date
    let image = this.props.movie.poster_path
    let overview = this.props.movie.overview
    let selectedMovie = this.props.selectedMovie
    this.setState({id:id, title:title, date:date, image:image, overview:overview, user:user})
  }

  saveMovie(){
    const newMovie = {
      id: this.state.id,
      title: this.state.title,
      date: this.state.date,
      image: this.state.image,
      overview: this.state.overview,
      watched: false,
      reminder: false
    };
    this.addNewMovie(newMovie);
    this.favoriteMovieDisplay(event);
  }

  favoriteMovieDisplay(event) {
    if (this.state.activeMovie === false){
      this.setState({
      activeMovie: true});
      } else {
      this.setState({activeMovie: false});
    }
  }

  addNewMovie(newMovieInfo){
  this.props.movieDatabase.push(newMovieInfo);
  }

  render() {
    let id = this.props.movie.id
    let overview = this.props.movie.overview
    let classesFavorite = classnames('favorite-btn', {active: this.state.activeMovie});
    let date = moment(this.props.movie.release_date).format("MM/DD/YYYY")

    let favoriteButton;
    if (this.props.user) {
      favoriteButton =
      <div>
        <span>
          <button className={classesFavorite}
          onClick={() => this.saveMovie()}></button>
        </span>
      </div>
    } else {
      favoriteButton= ''
    }

    return (
      <article className="individual-movie" id={(this.props.movie.id)}>
        <span className="spec-favorite-btn"> {favoriteButton} </span>
        <img onClick={() => {this.props.getMovieDetail(id)}} className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path}/>
        <h4 className="movie-title">{this.props.movie.title}</h4>
        <p className="movie-date">
          Release Date: {date}
        </p>
        <p className="movie-description">
          {overview.substring(0, 100)}<span>...</span>
          <button className="more-btn"
          onClick={() => {this.props.getMovieDetail(id)}}>
          More
          </button>
        </p>
      </article>

    )
  }
}
