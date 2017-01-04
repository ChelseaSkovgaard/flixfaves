import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import WatchedMovies from '../lib/components/WatchedMovies'

const sinon = require('sinon')

describe('WatchedMovies', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<WatchedMovies />)
  })

  it('sets initial state of current movies to an empty array', () => {
   const wrapper = shallow(<WatchedMovies />)
   expect(wrapper.state('moviesWatched')).deep.equal([]);
  })

  it('can call componentDidMount', () => {
    sinon.spy(WatchedMovies.prototype, 'componentDidMount')
    const wrapper = mount(<WatchedMovies />)
    assert.equal(WatchedMovies.prototype.componentDidMount.calledOnce, true)
  })

})
