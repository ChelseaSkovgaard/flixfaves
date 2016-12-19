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
        {this.state.result.map(function(movie, i){
          return <article key={i}>
            <h4 className="movie-title">{movie.title}</h4>
            <img className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
            <p className="movie-date">
              Release Date: {movie.release_date}
            </p>
            <p className="movie-description">
              {movie.overview}
            </p>
          </article>
        ;}
        )}
      </div>
    </section>
  );
}
};

module.exports = SearchPage;
