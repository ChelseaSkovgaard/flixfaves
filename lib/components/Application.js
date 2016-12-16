import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Search from './Search.js';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      result: [],
      movie: '',
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

//
// findMovieInfo() {
//   $.get('https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query='+this.state.movie)
//   .then(function(result){
//     this.setState({
//       result:result
//     })
//   }.bind(this))
// }

componentDidMount() {

  var _this = this;
    $.get("https://api.themoviedb.org/3/search/movie?api_key=3b0cb67fa2d52569a7722e1614ea5df3&query=Jack+Reacher")

    .then(function(result) {
      _this.setState({
        result: result.results[0].title

      });
    })
}

render(){
  return(
    <section>
      <h1>Welcome to the Movie App</h1>
      <div>
        Display Movie Info
        <span>{this.state.result} </span>
      </div>
    </section>
  );
}
};

ReactDOM.render(<Application />, document.getElementById('app'));

module.exports = Application;
