import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import SignOut from '../lib/components/SignOut'

const sinon = require('sinon')

describe('SignOut', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SignOut />)
  })

  it.skip('should have a button', function(){
    const user = user
    const wrapper = render(<SignOut user={user}/>)
    assert.equal(wrapper.find('button').length, 1)
  });

  it.skip('should sign into the app on button click', ()=>{
    const user = user
    let signOut = sinon.spy();
    const wrapper = mount(<SignOut user={user}/>);
    wrapper.find('#sign-out-btn').simulate('click');
    expect(signOut).to.have.property('callCount', 1)
  })
})
