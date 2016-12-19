import React from 'react';
import firebase, {signIn, signOut} from '../firebase';

const SignIn = () => {
  return (
    <aside>
     <button onClick={() => signIn()}>
     SIGN IN
     </button>
    </aside>
  )
}

module.exports = SignIn
