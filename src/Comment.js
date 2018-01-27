import React from 'react'

const styles = {
    comment: {
      marginTop: 10,
      marginBottom: 10
    }
  }

const Comment = props => (
  <li className="media">
    <img className="mr-3 rounded-circle" src={props.comment.user.photoURL} alt={props.comment.user.displayName}/>
    <div className="media-body">
      <h5 className="mt-0 mb-1">{props.comment.user.displayName}</h5>
            {props.comment.comment}
    </div>
  </li>
  )

export default Comment;


// class Comment extends Component {

//   constructor(props) {
//     super(props)
  
//     this.styles = {
//       comment: {
//         marginTop: 10,
//         marginBottom: 10
//       }
//     }
//   }
  

//   render() {
//     return (
//       <div className="card" style={this.styles.comment}>
//         <div className="card-body">
//         {this.props.comment.comment}
//         </div>
//       </div>
      
//     )
//   }

// }


// export default Comment