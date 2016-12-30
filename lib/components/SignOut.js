import React, { Component } from 'react';
import firebase, {signOut} from '../firebase';

class SignOut extends Component {
  render() {
    let signout;
    if (this.props.user) {
      signout =
      <button id="sign-out-btn" onClick={() => signOut()}>
      SIGN OUT
      </button>
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
