import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import { Link } from 'react-router';
import Search from './Search';
import IndividualMovie from './IndividualMovie';
import MovieDetail from './MovieDetail';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      result: [],
      movie: '',
      user: '',
      selectedMovie: ''
    };
  }

  componentWillMount() {
    let user = this.props.user
    this.setState({user:user});
  }

  setMovieSearch(value) {
    this.setState ({
      movie: value,
    }, () => {
      this.getMovieInfo();
    });
  }

  getMovieInfo() {
    let jqxhr = null
    let movie = this.state.movie
    let movieFormat = movie.replace(' ', '+')
    let api = 'https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query='
    let url = api+movieFormat
    if(jqxhr!=null) {
      jqxhr.abort();
    }
    jqxhr = $.get(url,
      function(result) {
        this.setState({
          result: result.results,
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
      )}
    if (selectedMovie === '') {
      return(
        <section className="search-page">
          <Search setMovieSearch={this.setMovieSearch.bind(this)} />
          <div>
            {this.state.result.map(m =>
              <IndividualMovie movie={m} user={this.state.user} getMovieDetail={this.getMovieDetail.bind(this)} movieDatabase={this.props.movieDatabase}/>
            )}
          </div>
        </section>
      );
    }
  }
}

module.exports = SearchPage;
