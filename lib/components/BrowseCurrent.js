import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
const $ = require('jquery');
import IndividualMovie from './IndividualMovie';
import MovieDetail from './MovieDetail';

class BrowseCurrent extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      playing: [],
      selectedMovie: ''
    };
  }

  componentWillMount() {
    let user = this.props.user;
    this.setState({user:user});
    this.getPlayingMovies();
  }

  getPlayingMovies() {
    $.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US&region=US',
      function(playing) {
        this.setState({
          playing: playing.results,
        });
      }.bind(this));
  }

  getMovieDetail(id) {
    this.setState({selectedMovie: id});
  }

  resetMovieDetail() {
    this.setState({selectedMovie: ''});
  }

  render(){
    const selectedMovie = this.state.selectedMovie;
    if (selectedMovie) {
      return (
        <MovieDetail
        movieID={this.state.selectedMovie}
        resetMovieDetail={this.resetMovieDetail.bind(this)}
        />
      );
    }
    if(selectedMovie === '') {
      return(
        <div className="browse-page">
          {this.state.playing.map(m =>
          <IndividualMovie movie={m}
          user={this.state.user}
          movieDatabase={this.props.movieDatabase}
          getMovieDetail={this.getMovieDetail.bind(this)}
          />
          )}
        </div>
      );
    }
  }
}

module.exports = BrowseCurrent;
