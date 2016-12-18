import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Search from './Search.js';

import { Link } from 'react-router';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      result: [],
      genres: [],
      movie: ''
    }
  }

setMovieSearch(value) {
  this.setState ({
    movie: value,
  }, () => {
    this.getMovieInfo()
    this.getGenres()
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
      })
      console.log(this.state.result)
    }.bind(this))
}

getGenres() {
  let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US'
  $.get(url,
  function(result){
    this.setState({
      genres: result
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
      <div>
        {this.state.result.map(function(movie, i){
          return <li key={i}>
            {movie.title}
            {movie.release_date}
            {movie.overview}
          </li>
        ;}
        )}
      </div>
    </section>
  );
}
};

module.exports = SearchPage;
