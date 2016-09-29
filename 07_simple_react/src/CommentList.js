import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Counter from './Counter';

export default class App extends Component {
      constructor(props){
        super(props);
        this.state = {
            comments: this.props.data || []
          }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
      }


    handleCommentSubmit(comment) {
        let comments = this.state.comments
        let newComments = comments.concat([comment])
        this.setState({comments: newComments});
    }

  render() {
    console.log(this.state.comments)
   const style = {
    margin: 10
  }

    let comments = this.state.comments.map((value, index) => {
      return <Comment key={index} data={value}/>
    })

  return (
    <div>
        <Counter data={comments.length} />
        <ul style={style}>{comments}</ul>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
    </div>
    );
}
}