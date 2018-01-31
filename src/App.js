import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments: {
       },
       isLoggedIn:false,
       user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }

  componentDidMount(){
    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }
  
  postNewComment(comment){
    const {displayName, photoURL, uid} = this.state.user
    comment.user = { uid, displayName, photoURL}
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments
    }) 
  }

  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
      .then((user) => {
        this.setState({ isLoggedIn: true, user })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
        <div className="container-fluid">
          { this.state.isLoggedIn && 
          <div>
            {this.state.user.displayName}
            <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="rounded-circle" />
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment.bind(this)}/>
          </div>  
          }
          { !this.state.isLoggedIn && 
            <div className='alert alert-info'>
              <button onClick={() => this.auth('facebook') }>Entre com Facebook para comentar</button>
            </div>  
          }
          <Comments comments={this.state.comments}/>
          
        </div>
    );
  }
}

App.propTypes = {
  base: PropTypes.any.isRequired,
  providers: PropTypes.any.isRequired,
  auth: PropTypes.any.isRequired
}


export default App;
