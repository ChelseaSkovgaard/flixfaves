import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import BrowseUpcoming from '../lib/components/BrowseUpcoming'

describe('BrowseUpcoming', () => {

  it('can mount with no properties', () => {
    const wrapper = shallow(<BrowseUpcoming />)
  })

  it('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<BrowseUpcoming />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  })

})
