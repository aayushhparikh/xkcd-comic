import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  
  useEffect(() => {
    axios.get('http://xkcd.com/info.0.json')
  }, [])
  
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
