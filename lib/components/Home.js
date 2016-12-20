import React, { Component } from 'react';
import {render}from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';
import HomeInfo from './HomeInfo.js';
import SearchPage from './SearchPage.js';
import FavoriteList from './FavoriteList.js';
import firebase, { reference, signIn, signOut } from '../firebase';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

render(){
  return(
    <BrowserRouter>
      <section>
        <Header />
        <SignIn />
          <Match exactly pattern="/search" component={SearchPage} user={this.state.user}/>
          <Match exactly pattern="/" component={HomeInfo}/>
          <Match exactly pattern="/favorites" component={FavoriteList} />
        <Footer />
      </section>
    </BrowserRouter>
  );
}
};

render(<Home />, document.getElementById('app'))
