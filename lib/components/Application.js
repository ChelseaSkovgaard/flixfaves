import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      user: ''
    }
  }

render(){
  return(
    <section>
      <Header />
    </section>
  );
}
};

module.exports = Application;
