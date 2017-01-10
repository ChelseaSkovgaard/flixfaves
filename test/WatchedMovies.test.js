import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import WatchedMovies from '../lib/components/WatchedMovies'
import FavoritesMock from './helpers/FavoritesMock'

const sinon = require('sinon')

describe('WatchedMovies', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<WatchedMovies favorites={FavoritesMock}/>)
  })

  it('renders the FavoriteMovieSimple component', () => {
   const wrapper = mount(<WatchedMovies favorites={FavoritesMock}/>)
   assert.equal(wrapper.find('.favorite-movie-card-container').length,1)
 })

})
