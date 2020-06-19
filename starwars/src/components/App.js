import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

   const [peopleList,setPeopleList]=useState()

  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  
    
    // axios.get(' https://swapi.py4e.com/api/people/')
    // .then(response=>{
    //    console.log(response)
    //    setPeopleList(response.data)
       
      
     
    // })
    // .catch(error=>{
    //   console.log('something is not right',error)
    // })

      useEffect(()=>{
        axios.get(' https://swapi.py4e.com/api/people/')
    .then(response=>{
      // console.log(response)
       setPeopleList(response.data)
       
      
     
    })
    .catch(error=>{
      console.log('something is not right',error)
    })
      })
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character/>
    </div>
  );
}


export default App;