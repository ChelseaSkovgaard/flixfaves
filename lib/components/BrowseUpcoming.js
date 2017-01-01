import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
const $ = require('jquery');
import IndividualMovie from './IndividualMovie';
import MovieDetail from './MovieDetail';

class BrowseUpcoming extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      upcoming: [],
      selectedMovie: ''
    }
  }

  componentWillMount() {
    let user = this.props.user
    this.setState({user:user})
    this.getUpcomingMovies()
  }

  getUpcomingMovies() {
      $.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US&region=US",
      function(upcoming) {
        this.setState({
          upcoming: upcoming.results,
        })
      }.bind(this))
  }

  getMovieDetail(id) {
    this.setState({selectedMovie: id})
  }

  resetMovieDetail() {
    this.setState({selectedMovie: ''})
  }

  render(){
    const selectedMovie = this.state.selectedMovie;
      if (selectedMovie) {
        return (
          <MovieDetail
          movieID={this.state.selectedMovie}
          resetMovieDetail={this.resetMovieDetail.bind(this)}
          />
        )}
      if (selectedMovie === '') {
      return(
          <div className="browse-page">
            {this.state.upcoming.map(m =>
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

module.exports = BrowseUpcoming;
