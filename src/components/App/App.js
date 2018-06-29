// @flow

import React from 'react'
import HelloWorld from '../HelloWorld'
import './App.scss'

class App extends React.Component {
  render () {
    return (
      <div styleName='App'>
        <header styleName='App-header'>
          <img src='/images/logo.svg' styleName='App-logo' alt='logo' />
          <h1 styleName='App-title'>Welcome to React</h1>
        </header>
        <p styleName='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld title='Hello, Tuong Nguyen' />
      </div>
    )
  }
}

export default App
