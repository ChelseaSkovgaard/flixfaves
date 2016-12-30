import React, { Component } from 'react';
import firebase, {signIn, signOut} from '../firebase';

class SignIn extends Component {
  render() {
    let signin;
    if (!this.props.user) {
      signin =
      <button id="sign-in-btn" onClick={() => signIn()}>
      SIGN IN
      </button>
    } else {
      signin= ''
    }

  return (
    <aside className="sign-on-container">
     {signin}
    </aside>
  )
}
}

module.exports = SignIn
