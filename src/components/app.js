import React, { Component } from 'react';

import TraditionalClassComponent from "./traditionalClassComponent"
import FunctionalComponent from './functionalComponent';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hooks Example</h1>
        <TraditionalClassComponent />
        <FunctionalComponent />
      </div>
    );
  }
}
