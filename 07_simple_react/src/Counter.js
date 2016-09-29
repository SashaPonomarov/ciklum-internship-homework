import React, { Component } from 'react';

export default class App extends Component {
      constructor(props){
        super(props);
        this.state = {
            count: this.props.data || 0
          }
      }

  render() {
   const style = {
    margin: 10
  }
  return (
        <div style={style}>
            {this.state.count} comments:
        </div>
    );
}
}