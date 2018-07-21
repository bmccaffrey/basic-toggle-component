import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  };

  render() {
    return (
      <div>
        <button>Show/Hide</button>
      </div>
    );
  }
}
