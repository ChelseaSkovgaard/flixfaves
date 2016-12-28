import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import HomeInfo from '../lib/components/HomeInfo'

describe('HomeInfo', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<HomeInfo />)
  })
})
