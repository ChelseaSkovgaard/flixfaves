import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import FavoriteList from '../lib/components/FavoriteList'

describe('FavoriteList', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<FavoriteList />)
  })
})
