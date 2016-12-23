import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import Browse from '../lib/components/Browse'

describe('Browse', () => {

  it('can mount with no properties', () => {
    const wrapper = shallow(<Browse />)
  })

  it('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<Browse />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  })

})
