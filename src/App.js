import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [com, setCom] = useState(null)
  
  useEffect(() => {
    //https://cors-anywhere.herokuapp.com/ allows for cross-origin requests to xkcd
    axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
    .then(res => setCom(res.data))
    .catch(err => console.log('error', err))
  }, [])

  console.log(com)
  
  return (
    <div className="App">
      {com.title}
    </div>
  );
}

export default App;
