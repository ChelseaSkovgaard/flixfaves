import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import BrowseCurrent from '../lib/components/BrowseCurrent'

const sinon = require('sinon')

describe('BrowseCurrent', () => {

  it('can mount with no properties', () => {
    const wrapper = shallow(<BrowseCurrent />)
  })

  it('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<BrowseCurrent />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  })

  it('sets initial state of current movies to an empty array', () => {
   const wrapper = shallow(<BrowseCurrent />)
   expect(wrapper.state('playing')).deep.equal([]);
  })

  it('can call componentWillMount', () => {
    sinon.spy(BrowseCurrent.prototype, 'componentWillMount')
    const wrapper = mount(<BrowseCurrent />)
    assert.equal(BrowseCurrent.prototype.componentWillMount.calledOnce, true)
  })

})
