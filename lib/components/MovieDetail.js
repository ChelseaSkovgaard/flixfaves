import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick} from 'lodash';
const $ = require('jquery');
import moment from 'moment';

export default class MovieDetail extends Component {
  constructor(){
    super();
    this.state = {
      selectedMovie: '',
      movieData: [],
      movieRecommendations: []
    };
  }
  componentWillMount() {
    let selectedMovie = this.props.movieID
    this.setState({selectedMovie:selectedMovie});

  }

  componentDidMount() {
    this.getMovieDetailData();
    this.getRecommendations();
  }

  getMovieDetailData() {
    let movie_id = this.state.selectedMovie
    let stringId = movie_id.toString()
    let url = `https://api.themoviedb.org/3/movie/${stringId}?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US`
    $.get(url,
      function(result) {
        this.setState({
          movieData: result
    });
    }.bind(this));
  }

  getRecommendations() {
    let movie_id = this.state.selectedMovie
    let stringId = movie_id.toString()
    let url = `https://api.themoviedb.org/3/movie/${stringId}/similar?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US&page=1`
    $.get(url,
      function(result) {
        this.setState({
          movieRecommendations: result
        });
      }.bind(this));
  }

  render() {
    let date = moment(this.state.movieData.release_date).format('MMMM DD, YYYY')
    return (
      <article className="movie-detail-page">
        <img className="detail-backdrop" src={"https://image.tmdb.org/t/p/w500/" + this.state.movieData.backdrop_path}/>
        <aside className="detail-highlights">
          <button className="close-detail-btn"
          onClick={() => this.props.resetMovieDetail()}>
          </button>
          <h4 className="detail-title">{this.state.movieData.title}</h4>
          <p className="detail-tagline">{this.state.movieData.tagline}</p>
          <p className="detail-date">Releases {date}</p>
          <p className="detail-rating">Movie Database User Rating: {this.state.movieData.vote_average} / 10</p>
        </aside>
        <p className="detail-overview">{this.state.movieData.overview}</p>
      </article>
    )
  }
}
