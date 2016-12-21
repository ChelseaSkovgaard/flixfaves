import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Search from './Search.js';
import IndividualMovie from './IndividualMovie.js';
import { Link } from 'react-router';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      result: [],
      genres: [],
      movie: '',
      favorite:''
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

setFavorite() {

  console.log('it works')
  // let key = movie.target.className
  // let favorite = {key:key}
  // this.setState({favorite:favorite})
}

render(){
  return(
    <section>
      <Header />
      <Search setMovieSearch={this.setMovieSearch.bind(this)} />
      <div>
        {this.state.result.map(m =>
          <IndividualMovie movie={m} />
        )}
      </div>
    </section>
  );
}
};

module.exports = SearchPage;
