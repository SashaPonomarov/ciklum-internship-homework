import React, { Component } from 'react';

export default class App extends Component {
  render() {
   const style = {
    margin: 10
  }
  return (
    <li style={style}>
        <span>{this.props.data.name}</span>: {this.props.data.content}</li>
    );
}
}