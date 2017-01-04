import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import BrowseUpcoming from '../lib/components/BrowseUpcoming'

const sinon = require('sinon')

describe('BrowseUpcoming', () => {

  it('can mount with no properties', () => {
    const wrapper = shallow(<BrowseUpcoming />)
  })

  it('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<BrowseUpcoming />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  })

  it('sets initial state of upcoming movies to an empty array', () => {
   const wrapper = shallow(<BrowseUpcoming />)
   expect(wrapper.state('upcoming')).deep.equal([]);
  })

  it('can call componentWillMount', () => {
    sinon.spy(BrowseUpcoming.prototype, 'componentWillMount')
    const wrapper = mount(<BrowseUpcoming />)
    assert.equal(BrowseUpcoming.prototype.componentWillMount.calledOnce, true)
  })

})
