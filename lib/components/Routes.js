import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import SearchPage from './SearchPage';
import FavoriteList from './FavoriteList';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';


class Routes extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Application}/>
        <Route path='/search' component={SearchPage}/>
        <Route path='/favorites' component={FavoriteList}/>
      </Router>
    )
  }
}

ReactDOM.render(<Routes />, document.getElementById('app'))
export default Routes;
