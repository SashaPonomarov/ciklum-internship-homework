import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const style = {
        margin: 10
    }
    const nameStyle = {
        fontWeight: 'bold'
    }
    return (
        <li style={style}>
            <span style={nameStyle}>{this.props.data.name}</span>: {this.props.data.content}
        </li>
        );
    }
}