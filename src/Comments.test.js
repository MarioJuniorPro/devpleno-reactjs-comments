import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comments from './Comments'

describe('<Comments />', () => {
  const comments = {
    1: {
      comment: 'test'
    },
    2: {
      comment: 'test 2'
    }
  }
  it('render without crashing', () => {
    const wrapper = mount(<Comments comments={comments} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(2)
  })
  
})
