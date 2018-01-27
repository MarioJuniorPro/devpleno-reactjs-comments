import React, { Component } from 'react'





class Comment extends Component {

  constructor(props) {
    super(props)
  
    this.styles = {
      comment: {
        marginTop: 10,
        marginBottom: 10
      }
    }
  }
  

  render() {
    return (
      <div className="card" style={this.styles.comment}>
        <div className="card-body">
        {this.props.comment.comment}
        </div>
      </div>
      
    )
  }

}


export default Comment