import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick} from 'lodash';
const $ = require('jquery');

export default class MovieDetail extends Component {
  constructor(){
    super();
    this.state = {
      selectedMovie: '',
      movieData: []
    }
  }
  componentWillMount() {
    let selectedMovie = this.props.movieID
    this.setState({selectedMovie:selectedMovie})

  }

  componentDidMount() {
    this.getMovieDetailData()
  }
  
  getMovieDetailData() {
    let movie_id = this.state.selectedMovie
    let stringId = movie_id.toString()
    console.log(stringId)
    let url = `https://api.themoviedb.org/3/movie/${stringId}?api_key=3b0cb67fa2d52569a7722e1614ea5df3&language=en-US`
      $.get(url,
      function(result) {
        this.setState({
          movieData: result
        })
        console.log(this.state.movieData)
      }.bind(this))
  }


  render() {
    return (
      <article>
        <h1>Movie Detail</h1>
        <p>{this.state.selectedMovie}</p>
      </article>
    )
  }
}
