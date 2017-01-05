import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import IndividualMovie from '../lib/components/IndividualMovie'

const sinon = require('sinon')

describe('IndividualMovie', () => {
  let id = {id:"1"}

  it.skip('can render', () => {
    const wrapper = shallow(<IndividualMovie id={id}/>)
  })

  it.skip('should have a button', function(){
    const wrapper = render(<IndividualMovie/>)
    assert.equal(wrapper.find('button').length, 1)
  });

  it.skip('call the save favorite function when the button is clicked', () =>{
    let saveFavorite = sinon.spy();
    const wrapper = mount(<IndividualMovie />);
    wrapper.find('button').simulate('change');
    expect(saveFavorite).to.have.property('callCount', 1);
  });
})
