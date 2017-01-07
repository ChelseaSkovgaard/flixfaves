import React from 'react'
import { shallow, mount } from 'enzyme'
import { assert, expect } from 'chai'
import SearchPage from '../lib/components/SearchPage'

const sinon = require('sinon')

describe('SearchPage', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SearchPage />)
  })

  it('renders the Search component', () => {
   const wrapper = mount(<SearchPage />)
   assert.equal(wrapper.find('#search-movies').length, 1)
 })

  it('sets initial state of movie to an empty string', () => {
   const wrapper = shallow(<SearchPage />)
   assert.equal(wrapper.state('movie'), (''))
  })

  it('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<SearchPage />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  })

  it('sets initial state of result to an empty array', () => {
   const wrapper = shallow(<SearchPage />)
   expect(wrapper.state('result')).deep.equal([]);
  })

  it('can call componentWillMount', () => {
    sinon.spy(SearchPage.prototype, 'componentWillMount')
    const wrapper = mount(<SearchPage />)
    assert.equal(SearchPage.prototype.componentWillMount.calledOnce, true)
  })

})
