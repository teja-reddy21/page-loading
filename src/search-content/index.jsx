import { useState , useEffect} from 'react'
import './style.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function SearchContent(){

    const[InputValue,setInputvalue]=useState("")
    const[newuserValue,setNewUserValue]=useState()
  
    const notify = () => toast("Your data is Uploaded Successfully");

function getUserInput(e){
setInputvalue(e.target.value)
}

 useEffect(() => {
    alert("Welcome to the page!");
  }, []);

 function userdata(){
setNewUserValue(InputValue)
notify()
 

 }



 
    return <section className="container">
        <h2>{newuserValue}</h2>
        <ToastContainer />
        <div className='search-bar'>
        <input type='text' placeholder='search...' onChange={getUserInput}/>
        <br/>
        <button onClick={userdata}>Submit</button>
     
        </div>

    </section>
}