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

})
