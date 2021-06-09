import React, {useState, useEffect} from 'react'
import './App.css';
import Com from './Com'
import {Route, Switch} from 'react-router-dom'

function App() {

 return (
  <div className="App">
    <Route path="/" component={Com}/>
    <Route path="/:comNumb" component={Com}/>
  </div>
 )
   
}

export default App;
