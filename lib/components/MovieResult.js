const $ = require('jquery');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class MovieResult extends Component {

  render() {
    if(!this.props.title) {
      return null;
    }
    return (
    <div>
      {this.props.title}
    </div>
    )
  }
}
