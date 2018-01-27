import React from 'react'

const styles = {
    comment: {
      marginTop: 10,
      marginBottom: 10
    }
  }

const Comment = props => (
  <div className="card" style={styles.comment}>
    <div className="card-body">
      {props.comment.comment}
    </div>
  </div>
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