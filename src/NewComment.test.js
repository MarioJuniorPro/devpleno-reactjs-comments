import React from 'react'
import { shallow, mount, render } from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
  const postNewCommentMock = jest.fn()
  it('render without crashing', () => {
    const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />)
    expect(wrapper.length).toBe(1)
  })

  it('handle enter', () => {
    const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />)
    const eventMock = { 
        key: 'Enter',
        preventDefault: jest.fn()
     }    
    wrapper.instance().refs.comment.value = "test"
    wrapper.instance().handleEnter(eventMock)

    //Verifica a quantidade de chamadas do método
    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test')
    expect(wrapper.instance().refs.comment.value).toBe('')
  })
})
