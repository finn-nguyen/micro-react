import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src='/images/logo.svg' styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
