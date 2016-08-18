import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/"><img src="../images/updatedlogo.png" alt="logo"  /></a>
      </div>

      <div className="collapse navbar-collapse headline" id="bs-example-navbar-collapse-1">
        <h1>W.A.T. <span>WE ARE TOOLS</span></h1>
        <h2><em>-Tools for learning web development</em></h2>
      </div>
    </div>
  </nav>
    );
  }
}

export default App;
