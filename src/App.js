import React, { Component } from 'react';
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

////https://multitest-api.firebaseio.com/
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments: {
         '1': {
          comment: 'comentário 1'
         },
         '2': {
          comment: 'comentário 2'
         }
       }
    }
  }
  
  postNewComment(comment){

    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments
    }) 
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Welcome</a>
        </nav>
        <div className="container-fluid">
          <NewComment postNewComment={this.postNewComment.bind(this)}/>
          <Comments comments={this.state.comments}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
