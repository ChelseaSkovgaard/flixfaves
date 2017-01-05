import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Footer from '../lib/components/Footer'

describe('Footer', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Footer />)
  })

  it('renders as a <footer>', () => {
   const wrapper = shallow(<Footer />)
   assert.equal(wrapper.type(), 'footer')
 })

})
