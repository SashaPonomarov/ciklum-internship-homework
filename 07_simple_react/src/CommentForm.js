import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: "",
        content: ""
      }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleContentChange(e) {
    this.setState({content: e.target.value})
  }
  handleSubmit(e) {

    e.preventDefault();
    var name = this.state.name.trim();
    var content = this.state.content.trim();
    if (!content || !name) {
      return;
    }
    this.props.onCommentSubmit({name, content});
    this.setState({name: '', content: ''});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }


  render() {
    const style = {
      margin: 10,
      display: 'flex'
    }
    const inputStyle = {
      height: 40,
      paddingLeft: 10
    }
    const nameStyle = {
      width: 100
    }
    const textStyle = {
      flexGrow: 1
    }

  return (
      <form style={style} className="commentForm" onSubmit={this.handleSubmit}>
        <input style={{...inputStyle, ...nameStyle}} type="text" placeholder="Your name" value={this.state.name}
          onChange={this.handleNameChange} />
        <input style={{...inputStyle, ...textStyle}} type="text" placeholder="Comment" value={this.state.content}
          onChange={this.handleContentChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}