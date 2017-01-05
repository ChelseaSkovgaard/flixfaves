import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import IndividualMovie from '../lib/components/IndividualMovie'
import MovieMock from './helpers/MovieMock'

const sinon = require('sinon')

describe('IndividualMovie', () => {

  it('can render', () => {
    const wrapper = shallow(<IndividualMovie movie={MovieMock}/>)
  });

  it('sets states of id, title, date, image, overview, and selectedMovies to the props that are passed', () => {
   const wrapper = shallow(<IndividualMovie movie={MovieMock}/>)
   assert.equal(wrapper.state('id'), (33049))
   assert.equal(wrapper.state('title'), ('Rogue One: A Star Wars Story'))
   assert.equal(wrapper.state('date'), ('2016-12-16'))
   assert.equal(wrapper.state('image'), ('/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg'))
   assert.equal(wrapper.state('overview'), ('A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.'))
  });

  it('should have a more details button', function(){
    const wrapper = render(<IndividualMovie movie={MovieMock}/>)
    assert.equal(wrapper.find('.more-btn').length, 1)
  });

  it('should have a favorite button', function(){
    const wrapper = render(<IndividualMovie movie={MovieMock}/>)
    assert.equal(wrapper.find('.spec-favorite-btn').length, 1)
  });

  it('call the more details function when the more details button is clicked', () =>{
    let getMovieDetail = sinon.spy();
    const wrapper = mount(<IndividualMovie movie={MovieMock} getMovieDetail={getMovieDetail}/>);
    wrapper.find('.more-btn').simulate('click');
    expect(getMovieDetail).to.have.property('callCount', 1);
  });

  it('call the more details function when the movie image is clicked', () =>{
    let getMovieDetail = sinon.spy();
    const wrapper = mount(<IndividualMovie movie={MovieMock} getMovieDetail={getMovieDetail}/>);
    wrapper.find('.movie-image').simulate('click');
    expect(getMovieDetail).to.have.property('callCount', 1);
  });

  it('can call componentWillMount', () => {
    sinon.spy(IndividualMovie.prototype, 'componentWillMount')
    const wrapper = mount(<IndividualMovie movie={MovieMock}/>)
    assert.equal(IndividualMovie.prototype.componentWillMount.calledOnce, true)
  })

  it('can call componentWillReceiveProps', () => {
    sinon.spy(IndividualMovie.prototype, 'componentWillReceiveProps')
    const wrapper = mount(<IndividualMovie movie={MovieMock}/>)
    assert.equal(IndividualMovie.prototype.componentWillMount.called, true)
  })

})
