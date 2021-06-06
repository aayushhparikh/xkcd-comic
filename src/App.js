import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [com, setCom] = useState()

  const xkcdAPI = async() => {
    try {
      //https://corsporxy-xkcd.herokuapp.com/ allows for cross-origin requests to xkcd
      axios.get("https://corsporxy-xkcd.herokuapp.com/http://xkcd.com/info.0.json")
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
      axios.get("https://corsporxy-xkcd.herokuapp.com/http://xkcd.com/" + number + "/info.0.json")
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
      <button onClick={() => readCom(com.num - 1)}>
        previous
      </button>
      <button onClick={() => readCom(com.num + 1)}>
        next
      </button>
      <img src={com.img} />
    </div>
  );
}

export default App;
