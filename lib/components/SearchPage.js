import React from 'react';
import Search from './Search.js';

const SearchPage = ({setMovieSearch}) => {
  
  return (
    <section>
     <h2> Search Movies </h2>
      <Search setMovieSearch={setMovieSearch}/>
    </section>
  )
}

module.exports = SearchPage;
