import React, {useState, useEffect} from 'react'
import './App.css';
import Com from './Com'
import {Route, Switch} from 'react-router-dom'

function App() {

 return (
  <div className="App">
    <Switch>
    <Route path="/:comNumb" component={Com}/>
    <Route path="/" component={Com}/>
    </Switch>
  </div>
 )
   
}

export default App;
