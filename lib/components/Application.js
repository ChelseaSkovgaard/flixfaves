import React, { Component } from 'react';
import {render}from 'react-dom';
const $ = require('jquery');
import Header from './Header.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';
import HomeInfo from './HomeInfo.js';
import SearchPage from './SearchPage.js';
import FavoriteList from './FavoriteList.js';
import Browse from './Browse.js';
import MovieDetail from './MovieDetail.js';
import firebase, { signIn, signOut, reference, remove } from '../firebase';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import { map, extend } from 'lodash';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      movieDatabase: null,
      favorites: []
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>
      this.assignDatabaseReferences(user)
    );
  }

  assignDatabaseReferences(user){
    this.setState({
      user,
      movieDatabase: user ? firebase.database().ref(user.uid) : null
    },
      () => {
        this.createDatabaseEventListener(user);
      }
    );
  }

  createDatabaseEventListener(user){
      if (user) {
        firebase.database().ref(user.uid).on('value', (snapshot) => {
          const favorites = snapshot.val() || {};
          this.setState({
            favorites: map(favorites, (val, key) => extend(val, { key })),
          });
        });
      } else {
        this.setState({
          favorites: [],
        });
      }
    }

    deleteMovie(key) {
        const { uid } = this.state.user
        console.log('clicked')
        this.state.favorites.map(movie => {
          if(key === movie.key) {
            this.setState({
              movieDatabase: firebase.database().ref(`${uid}/${key}`).remove()
            })
          } else {
            return
          }
      })
    }

render(){
  return(
    <BrowserRouter>
      <section>
        <Header />
        <SignIn />
          <Match exactly pattern="/search" render={ () => (<SearchPage user={this.state.user} movieDatabase={this.state.movieDatabase}/>)}/>
          <Match exactly pattern="/" component={HomeInfo}/>
          <Match exactly pattern="/favorites" render={ () => (<FavoriteList user={this.state.user} favorites={this.state.favorites} movieDatabase={this.state.movieDatabase} deleteMovie={this.deleteMovie.bind(this)}/>)}/>
          <Match exactly pattern="/browse" render={ () => (<Browse user={this.state.user} movieDatabase={this.state.movieDatabase}/>)}/>
          <Match exactly pattern="/moviedetail" render={ () => (<MovieDetail user={this.state.user}/>)}/>
        <Footer />
      </section>
    </BrowserRouter>
  );
}
};

render(<Application />, document.getElementById('app'))
