import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import { shallow, mount, render } from 'enzyme'


describe('<App />', () => {
  const base = {
    syncState: jest.fn(() => {

    })
  }

  it('render without crashing', () => {
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.length).toBe(1)
  })
  it('should have .container-fluid class', () => {
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.is('.container-fluid')).toBe(true)
  })

  it('shows Comments', () => {
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows NewComment', () => {
    const wrapper = shallow(<App base={base}/>)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
  
  it('adds a new comment to state when postNewComment is called', () => {
    const wrapper = mount(<App base={base}/>)
    wrapper.instance().postNewComment({comment: 'Test'})
    wrapper.instance().postNewComment({comment: 'Test 2'})
    // console.log(wrapper.instance().state)
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(2)
  })
  

  it('outputs the <App/>', () => {
    //Test componente isolado
    const wrapperShallow = shallow(<App base={base}/>)
    //Test componente com interações
    const wrapperMount = mount(<App base={base}/>)
    //Test html renderizado
    const wrapperRender = render(<App base={base}/>)

    // console.log(wrapperShallow.debug())
    // console.log(wrapperMount.debug())
    // console.log(wrapperRender.html())
  })
})
