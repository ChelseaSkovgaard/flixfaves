import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import AllMovies from '../lib/components/AllMovies'
import FavoritesMock from './helpers/FavoritesMock'

describe('AllMovies', () => {
  it('can render', () => {
    const wrapper = shallow(<AllMovies favorites={FavoritesMock}/>)
  })
})
