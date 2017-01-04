import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import SignOut from '../lib/components/SignOut'

const sinon = require('sinon')

describe('SignOut', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SignOut />)
  })

  it('should render as an aside', function(){
    const user = user
    const wrapper = render(<SignOut user={user}/>)
    assert.equal(wrapper.find('aside').length, 1)
  });

})
