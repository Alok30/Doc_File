import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import SettingsForm from './components/SettingsForm';
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <SettingsForm/>
      </div>
    );
  }
}

export default App;
