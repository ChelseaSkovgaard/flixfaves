import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import {pick} from 'lodash';

export default class MovieDetail extends Component {
  constructor(){
    super();
    this.state = {
      selectedMovie: ''
    }
  }
  componentWillMount() {
    let selectedMovie = this.props.movieID
    this.setState({selectedMovie:selectedMovie})
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
