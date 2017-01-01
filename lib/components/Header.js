import React from 'react';
import SignIn from './SignIn';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>FLIX FAVES</h1>
      </Link>
      <Link className="home-page-link" to='/favorites'>
        Favorites
      </Link>
    </header>
  )
}

module.exports = Header
