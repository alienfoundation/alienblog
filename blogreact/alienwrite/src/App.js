import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
import Posts from "./components/posts/posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
