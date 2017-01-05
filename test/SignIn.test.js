import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import SignIn from '../lib/components/SignIn'

const sinon = require('sinon')

describe('SignIn', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SignIn />)
  })

  it('should have a button', function(){
    const wrapper = render(<SignIn />)
    assert.equal(wrapper.find('button').length, 1)
  });
  
})
