import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [com, setCom] = useState()

  const xkcdAPI = async() => {
    try {
      //https://cors-anywhere.herokuapp.com/ allows for cross-origin requests to xkcd
      axios.get("https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json")
      .then(res => setCom(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    xkcdAPI()
  }, [])

  const readCom = (number) => {
    try {
      axios.get("https://cors-anywhere.herokuapp.com/http://xkcd.com/614/info.0.json")
      .then(res => setCom(res.data))
    } catch (error) {
      console.log(error)
    }}
    
  //lets com have a value when called
  if(!com) {
    return (
    <div></div>
    )
  }
  
  return (
    <div className="App">
      {com.title}
      <button onClick={() => readCom()}>
        next
      </button>
      <img src={com.img} />
    </div>
  );
}

export default App;
