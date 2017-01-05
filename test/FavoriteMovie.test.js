import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import FavoriteMovie from '../lib/components/FavoriteMovie'

const sinon = require('sinon')

describe('FavoriteMovie', () => {
  it('can render', () => {
    const wrapper = shallow(<FavoriteMovie />)
  })

  it('should have two buttons', function(){
    const wrapper = render(<FavoriteMovie/>)
    assert.equal(wrapper.find('button').length, 2)
  });

  it('should call the movie watched function when the watched button is clicked', () =>{
    let setMovieWatched = sinon.spy();
    const wrapper = mount(<FavoriteMovie setMovieWatched={setMovieWatched}/>);
    wrapper.find('.favorite-watched-btn').simulate('click');
    expect(setMovieWatched).to.have.property('callCount', 1);
  });

  it('should call the delete function when the delete button is clicked', () =>{
    let deleteMovie = sinon.spy();
    const wrapper = mount(<FavoriteMovie deleteMovie={deleteMovie}/>);
    wrapper.find('.favorite-delete-btn').simulate('click');
    expect(deleteMovie).to.have.property('callCount', 1);
  });
})
