import React, { Component } from 'react';
import {render}from 'react-dom';
const $ = require('jquery');
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import SignOut from './SignOut';
import HomeInfo from './HomeInfo';
import SearchPage from './SearchPage';
import FavoriteList from './FavoriteList';
import Browse from './Browse';
import MovieDetail from './MovieDetail';
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
      this.referenceDatabaseUser(user)
    );
  }

  referenceDatabaseUser(user){
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

    setMovieReminder(key) {
      const {uid} = this.state.user
      this.state.favorites.map(movie => {
        if (key === movie.key) {
          firebase.database().ref(`${uid}/${key}/`).update({reminder: true});
        }
      })
    }

    setMovieWatched(key) {
      const {uid} = this.state.user
      this.state.favorites.map(movie => {
        if (key === movie.key) {
          firebase.database().ref(`${uid}/${key}/`).update({watched: true});
        }
      })
    }

render(){

  return(
    <BrowserRouter>
      <section>
        <Header />
          <SignIn user={this.state.user}/>
          <SignOut user={this.state.user}/>
          <Match exactly pattern="/search" render={ () => (<SearchPage
            user={this.state.user}
            movieDatabase={this.state.movieDatabase}/>)}/>

          <Match exactly pattern="/" component={HomeInfo}/>

          <Match exactly pattern="/favorites" render={ () => (<FavoriteList
            user={this.state.user}
            favorites={this.state.favorites}
            movieDatabase={this.state.movieDatabase}
            deleteMovie={this.deleteMovie.bind(this)}
            setMovieReminder={this.setMovieReminder.bind(this)}
            setMovieWatched={this.setMovieWatched.bind(this)}/>
          )}/>

          <Match exactly pattern="/browse" render={ () => (<Browse
            user={this.state.user}
            movieDatabase={this.state.movieDatabase}/>)}/>

          <Match exactly pattern="/moviedetail" render={ () => (<MovieDetail
            user={this.state.user}/>)}/>

        <Footer />
      </section>
    </BrowserRouter>
  );
}
};

render(<Application />, document.getElementById('app'))
