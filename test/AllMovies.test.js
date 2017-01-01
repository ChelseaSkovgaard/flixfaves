import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import AllMovies from '../lib/components/AllMovies'

describe('AllMovies', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<AllMovies />)
  })
})
