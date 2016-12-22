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

  it.skip('should sign into the app on button click', ()=>{
    let signIn = sinon.spy();
    const wrapper = mount(<SignIn/>);
    wrapper.find('#sign-in-btn').simulate('click');
    expect(signIn).to.have.property('callCount', 1)
  })
})
