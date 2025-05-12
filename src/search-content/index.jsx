import { useState , useEffect} from 'react'
import './style.css'


export default function SearchContent(){

    const[InputValue,setInputvalue]=useState("")
    const[newuserValue,setNewUserValue]=useState()
  

function getUserInput(e){
setInputvalue(e.target.value)
}

 useEffect(() => {
    alert("Welcome to the page!");
  }, []);

 function userdata(){
setNewUserValue(InputValue)
 

 }



 
    return <section className="container">
        <h2>{newuserValue}</h2>
      
        <div className='search-bar'>
        <input type='text' placeholder='search...' onChange={getUserInput}/>
        <br/>
        <button onClick={userdata}>Submit</button>
     
        </div>

    </section>
}