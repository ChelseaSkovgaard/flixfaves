import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import FavoriteList from './components/FavoriteList';
import { BrowserRouter, Match, Miss } from 'react-router';

const Routes = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/search" component={SearchPage} />
        <Match exactly pattern="/favorites" component={FavoriteList} />
      </div>
    </BrowserRouter>
  )
}


render(<Routes />, document.getElementById('app'))
