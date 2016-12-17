import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Search from './Search.js';
import Header from './Header.js';

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

setMovieSearch(value) {
  this.setState ({
    movie: value,
  }, () => {
    this.getMovieInfo()
  });
}


//may need to seperate words from input --> make in format Jack+Reacher

getMovieInfo() {
  let movie = this.state.movie
  let url = this.props.url+movie
  console.log(url);
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
      <Search movie={this.state.movie} setMovieSearch={this.setMovieSearch.bind(this)}/>
      <div>
        Display Movie Info
      </div>

      <span>{this.state.movieTitle}</span>
    </section>
  );
}
};

ReactDOM.render(<Application url='https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query=' />, document.getElementById('app'));

module.exports = Application;
