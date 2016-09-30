import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: this.props.count || 0
      }
  }

  componentWillReceiveProps({count}) {
    this.setState({count})
  }

  render() {
    return (
          <div>
              {this.state.count} comments:
          </div>
      );
  }
}