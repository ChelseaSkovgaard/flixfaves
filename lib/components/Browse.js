import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndividualMovie from './IndividualMovie'
const $ = require('jquery');
import firebase, { reference} from '../firebase';
import { Link } from 'react-router';
import {pick} from 'lodash';
class Browse extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      upcoming: [],
      favorite: ''
    }
  }

componentWillMount() {
  let user = this.props.user
  this.getUpcomingMovies()
  this.setState({user:user})
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

handleMovieSave(movie) {
  let key = movie.target.className
  let favorite = key
  this.setState({favorite:favorite})
}

// saveFavorite(user) {
//   let favorite = this.state.favorite
//   reference.push({
//     favorite:favorite, user:pick(user,'displayName', 'email','uid')
//   });
// }

render(){
  return(
    <section>
    <div>
      {this.state.upcoming.map(m =>
        <IndividualMovie movie={m}
        user={this.state.user}
         handleMovieSave={this.handleMovieSave.bind(this)}/>
      )}
    </div>
    </section>
  );
}
};

module.exports = Browse;
