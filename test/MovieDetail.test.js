import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import MovieDetail from '../lib/components/MovieDetail'

const sinon = require('sinon')

describe('MovieDetail', () => {
  it('can render', () => {
    const wrapper = shallow(<MovieDetail />)
  })

  it('renders as a <article>', () => {
   const wrapper = shallow(<MovieDetail />)
   assert.equal(wrapper.type(), 'article')
 })

  it.skip('can call componentWillMount', () => {
    sinon.spy(MovieDetail.prototype, 'componentWillMount')
    const wrapper = mount(<MovieDetail />)
    assert.equal(MovieDetail.prototype.componentWillMount.calledOnce, true)
  })

  it.skip('should call the close detail function when the close button is clicked', () =>{
    let resetMovieDetail = sinon.spy();
    const wrapper = mount(<MovieDetail resetMovieDetail={resetMovieDetail}/>);
    wrapper.find('.close-detail-btn').simulate('click');
    expect(resetMovieDetail).to.have.property('callCount', 1);
  });

})
