import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Com.css';
import axios from 'axios'

const Com = (props) => {
    console.log("COM PROPS", props)
  const comNumb = props.match.params.comNumb
  const [com, setCom] = useState()
  const [newCom, setNewCom] = useState()
  const [comNum, setComNum] = useState(null)

  const hist = useHistory()

  const xkcdAPI = async() => {
    try {
      axios.get("https://corsporxy-xkcd.herokuapp.com/http://xkcd.com/info.0.json")
      .then(res => {
        setCom(res.data)
        setNewCom(res.data.num)})
    } catch (error) {
      console.log(error)
    }
  }

  const randomComNum = async() => {
   try {
     const num = Math.floor(Math.random() * (newCom - 1) + 1)
     readCom(num)
     return num
   } catch (error) {
     console.log(error)
   }
  }

  const readCom = (number) => {
    try {
      axios.get("https://corsporxy-xkcd.herokuapp.com/http://xkcd.com/" + number + "/info.0.json")
      .then(res => setCom(res.data))
    } catch (error) {
      console.log(error)
    }}

  useEffect(() => {
    if (comNumb === undefined) {
      xkcdAPI()
    } else {
      readCom(comNumb)
    } 
  }, [comNumb])


  //lets com have a value when called
  if(!com) {
    return (
    <div></div>
    )
  }
  
  return (
    <div className="Com">
      <div className="main">
        {com.title}
      </div>
      <div className="middle">
        <button 
        onClick={() => hist.push('/' + (com.num - 1))}>
        previous
        </button>
        <button onClick={() => setComNum(randomComNum)}>
        random
        </button>
        <button 
          disabled={com.num === newCom}
          onClick={() => hist.push('/' + (com.num + 1))}>
        next
        </button>
      </div>
      <div className="info">
        {com.year}, {com.month}, {com.day}, {com.num}
      </div>
      <img src={com.img} title={com.alt} alt={com.title}/>
    </div>
  );
}

export default Com;
