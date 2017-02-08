import React from 'react';
import SignIn from './SignIn';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>FLIX FAVES</h1>
      </Link>
      <nav className="dropdown">
        <button className="drop-btn"> FIND MOVIES </button>
        <div className="navigation-content">
          <Link className="navigation-link" to='/search'>
            SEARCH<br/>
            MOVIES
          </Link>
          <Link className="navigation-link" to='/browseupcoming'>
            UPCOMING <br/>
            MOVIES
          </Link>
          <Link className="navigation-link" to='/browsecurrent'>
            CURRENT <br/>
            MOVIES
          </Link>
        </div>
      </nav>
    </header>
  )
}

module.exports = Header
