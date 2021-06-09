import React, {useState, useEffect} from 'react'
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Com from './Com';

function App() {

  return (
    <div className="App">
      <Com />
    </div>
  )
}

export default App;
