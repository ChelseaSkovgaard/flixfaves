import React from 'react'
import { shallow } from 'enzyme'
import { assert, expect } from 'chai'
import SearchPage from '../lib/components/SearchPage'

describe('SearchPage', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SearchPage />)
  })
})
