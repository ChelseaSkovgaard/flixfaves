import React from 'react';
import SignIn from './SignIn';

const Header = () => {
  return (
    <header>
     <h1>FLIX FINDER</h1>
     <aside id="sign-in">
      <SignIn />
     </aside>
    </header>
  )
}

module.exports = Header
