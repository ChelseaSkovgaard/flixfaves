import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Search from './Search.js';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      result: '',
      movie: '',
      movieTitle: '',
      input: false
    }
  }

setMovieSearch(value) {
  this.setState ({
    movie: value,
  }, () => {
    this.getMovieInfo()
  });
}

getMovieInfo() {
  let movie = this.state.movie
  let movieFormat = movie.replace(' ', '+')
  let api = 'https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query='
  let url = api+movieFormat
    $.get(url,
    function(result) {
      this.setState({
        result: result.results,
        movieTitle: result.results[0].title
      })
    }.bind(this))
}

render(){
  return(
    <section>
      <Header />
      <Search setMovieSearch={this.setMovieSearch.bind(this)} />
      <div>
        Display Movie Info
      </div>

      <span>{this.state.movieTitle}</span>
    </section>
  );
}
};

module.exports = SearchPage;
