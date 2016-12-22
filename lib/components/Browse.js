import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndividualMovie from './IndividualMovie'
const $ = require('jquery');

class Browse extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      upcoming: []
    }
  }

componentWillMount() {
  let user = this.props.user
  this.setState({user:user})
  this.getUpcomingMovies()
}

getUpcomingMovies() {
    $.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US&page=1",
    function(upcoming) {
      this.setState({
        upcoming: upcoming.results,
      })
    }.bind(this))
}

render(){
  return(
    <section>
      <div>
        {this.state.upcoming.map(m =>
          <IndividualMovie movie={m} user={this.state.user}/>
        )}
      </div>
    </section>
  );
}
};

module.exports = Browse;
