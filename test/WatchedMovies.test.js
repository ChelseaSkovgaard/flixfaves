import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import WatchedMovies from '../lib/components/WatchedMovies'

describe('WatchedMovies', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<WatchedMovies />)
  })
})
