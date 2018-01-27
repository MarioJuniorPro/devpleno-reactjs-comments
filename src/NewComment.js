import React, { Component } from 'react'

export default class NewComment extends Component {
    handleEnter(e){
        if(e.key === 'Enter'){
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            e.preventDefault()
        }
    }

  render() {
    return (
      <div className="form-group">
        <textarea placeholder="Comente!" className="form-control" onKeyDown={this.handleEnter.bind(this)} ref="comment" rows="5"></textarea>
      </div>
    )
  }
}
