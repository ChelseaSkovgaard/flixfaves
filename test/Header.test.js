import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import Header from '../lib/components/Header'

describe('Header', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Header />)
  })
})
