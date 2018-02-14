import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact/>
    <Route path="/about" />
    <Route path="/contact" />
  </div>
)

export default App;
