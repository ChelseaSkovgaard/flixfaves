import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Search from './Search.js';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      result: '',
      movie: '',
      movieTitle: '',
      input: false
    }
  }

setMovieSearch({movie}) {
  this.setState ({
    movie: movie,
  }, () => {
    this.getMovieInfo()
  });
}


//may need to seperate words from input --> make in format Jack+Reacher

getMovieInfo() {

    $.get("https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query=Jack+Reacher",
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
      <h1>Welcome to the Movie App</h1>
      <input className='button' type='submit' onClick={()=>this.getMovieInfo()}/>
      <div>
        Display Movie Info
      </div>

      <span>{this.state.movieTitle}</span>
    </section>
  );
}
};

ReactDOM.render(<Application />, document.getElementById('app'));

module.exports = Application;
