import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Footer from './Footer.js';

import { Link } from 'react-router'

class Home extends Component {
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
      <section id="hero">
        <Link className="search-movies-link" to='/search'>
        Search Movies
        </Link>
      </section>
      <section id="intro">
      </section>
      <section>
        <h2>MAKE YOUR LIST</h2>
        <h3>Want reminders when movies you want to see are in theaters? </h3>
        <article>
        Flix Favs helps you build a list of movies you want to see and alerts
        you when the film comes to theaters
        </article>
      </section>

      <section id="how-work">
        <h2>HOW IT WORKS</h2>
        <h3> Search for the movies you are interested in.</h3>
        <article>
          Use the filtering and search feature of Flix Finder to find
          movies you are interested in.
        </article>
        <article>
          For example, you can search by title or genre to find the
          best movie for you. There are also thousands of movies to choose from.
        </article>
      </section>
      <Footer />
    </section>
  );
}
};

module.exports = Home;
