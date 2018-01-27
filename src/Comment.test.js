import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
  const comment = {
    comment: 'test'
  }
  it('render without crashing', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.length).toBe(1)
  })
  it('should have .card class', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.is('.card')).toBe(true)
    expect(wrapper.text()).toBe(comment.comment)
  })
})
