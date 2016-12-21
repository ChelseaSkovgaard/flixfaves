import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');

import { Link } from 'react-router';

class Browse extends Component {
  constructor(){
    super();
    this.state = {
      upcoming: []
    }
  }

componentWillMount() {
  this.getUpcomingMovies()
}

getUpcomingMovies() {
    $.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US&page=1",
    function(upcoming) {
      this.setState({
        upcoming: upcoming.results,
      })
      console.log(this.state.upcoming)
    }.bind(this))
}



render(){
  const favorite = (e) => {
    console.log('works')
  }
  return(
    <section>
    <div>
      {this.state.upcoming.map(function(movie, i){
        return <article className="search-result" key={movie.id}>
          <img className="movie-image" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
          <h4 className="movie-title">{movie.title}</h4>
          <p className="movie-date">
            Release Date: {movie.release_date}
          </p>
          <p className="movie-description">
            {movie.overview}
          </p>
          <button onClick={(e) => favorite(e)}>Favorite</button>
        </article>
      ;}
      )}
    </div>
    </section>
  );
}
};

module.exports = Browse;
