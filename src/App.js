import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Services from './Component/Services';

function App() {
  return (
    <div className="App">
      <h1> Git Branching / Merge Practice</h1>
      <p> Let's practice Git Branching and Merging</p>
      <About />
      <Services />
    </div>
  );
}

export default App;
