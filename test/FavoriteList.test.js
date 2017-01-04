import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import FavoriteList from '../lib/components/FavoriteList'

const sinon = require('sinon')

describe('FavoriteList', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<FavoriteList />)
  })

  it('sets initial state of current movies to an empty array', () => {
   const wrapper = shallow(<FavoriteList />)
   expect(wrapper.state('currentMovies')).deep.equal([]);
  })

  it('sets initial state of upcoming movies to an empty array', () => {
   const wrapper = shallow(<FavoriteList />)
   expect(wrapper.state('upcomingMovies')).deep.equal([]);
  })

  it.skip('can call componentWillMount', () => {
    sinon.spy(FavoriteList.prototype, 'componentWillMount')
    const wrapper = mount(<FavoriteList />)
    assert.equal(FavoriteList.prototype.componentWillMount.calledOnce, true)
  })

  it.skip('can call componentDidMount', () => {
    sinon.spy(FavoriteList.prototype, 'componentDidMount')
    const wrapper = mount(<FavoriteList />)
    assert.equal(FavoriteList.prototype.componentDidMount.calledOnce, true)
  })

})
