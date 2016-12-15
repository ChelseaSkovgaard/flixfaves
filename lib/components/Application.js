import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Application extends Component {
  constructor(){
    super();
  }

render(){
  return(
    <section>
      <h1>Welcome to the Movie App</h1>
    </section>
  );
}
}

ReactDOM.render(<Application />, document.getElementById('app'));

module.exports = Application;
