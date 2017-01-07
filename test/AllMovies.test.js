import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import AllMovies from '../lib/components/AllMovies'
import FavoritesMock from './helpers/FavoritesMock'

describe('AllMovies', () => {
  it('can render', () => {
    const wrapper = shallow(<AllMovies favorites={FavoritesMock}/>)
  })
  it('renders as a <section>', () => {
   const wrapper = shallow(<AllMovies favorites={FavoritesMock}/>)
   assert.equal(wrapper.type(), 'section')
 })
 it('renders the FavoriteMovie component', () => {
  const wrapper = mount(<AllMovies favorites={FavoritesMock}/>)
  assert.equal(wrapper.find('.favorite-movie-card-container').length,5)
})
})
