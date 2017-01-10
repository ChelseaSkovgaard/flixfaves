import React, { Component } from 'react';
import firebase, {signOut} from '../firebase';
import { Link } from 'react-router';

class SignOut extends Component {
  render() {
    let signout;
    if (this.props.user) {
      signout =
      <div>
        <Link className="favorite-page-link" to='/favorites'>
          MY MOVIE
          DASHBOARD
        </Link>
        <button id="sign-out-btn" onClick={() => signOut()}>
        SIGN OUT
        </button>
      </div>
    } else {
      signout= ''
    }

  return (
    <aside className="sign-on-container">
     {signout}
    </aside>
  )
}
}

module.exports = SignOut
