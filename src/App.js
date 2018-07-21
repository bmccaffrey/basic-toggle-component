import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle
          render={text => (
            <div>
              <h1>{text}</h1>
              <button>Show / Hide</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
