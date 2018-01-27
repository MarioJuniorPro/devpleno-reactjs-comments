import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {

  renderComment(key, comment){
    return (
      <Comment key={key} comment={comment} />
    )
  }

  render() {
    return (
      <ul className="list-unstyled">
        { Object.keys(this.props.comments).reverse().map(key => this.renderComment(key, this.props.comments[key]))}
      </ul>
    )
  }
}


export default Comments