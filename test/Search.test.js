import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Search from '../lib/components/Search'

const sinon = require('sinon')

describe('Search', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Search />)
  })

  it('should have an input', function(){
    const wrapper = render(<Search/>)
    assert.equal(wrapper.find('input').length, 1)
  });

  it('call the set movie search function when changed', () =>{
    let setMovieSearch = sinon.spy();
    const wrapper = mount(<Search setMovieSearch={setMovieSearch}/>);
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('change');
    expect(setMovieSearch).to.have.property('callCount',2);
  });
})
