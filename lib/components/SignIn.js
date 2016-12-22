import React from 'react';
import firebase, {signIn, signOut} from '../firebase';

const SignIn = () => {
  return (
    <aside>
     <button id="sign-in-btn" onClick={() => signIn()}>
     SIGN IN
     </button>
    </aside>
  )
}

module.exports = SignIn
