import React, { useState } from 'react'
import './style.css'
function Data() {

const [name,setName]=useState("")
const [roll,setRoll]=useState("")
const [email,setEmail]=useState("")
const [id,setId]=useState("")



const empDetails={
name,roll,email,id
}
const empHandler=(e)=>{
    e.preventDefault()
    console.log(empDetails)
}


  return (
    <div className='container'>
       <div className='section'>
            <form onSubmit={empHandler}>
                <label>Employee Name</label><br/>
                <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/><br/>
                 <label>Employee Roll</label><br/>
                <input type='text' name='roll' onChange={(e)=>setRoll(e.target.value)}/><br/>
                 <label>Employee Email</label><br/>
                <input type='email' name='email' onChange={(e)=>setEmail(e.target.value)}/><br/>
                 <label>Employee Id</label><br/>
                <input type='text' name='id' onChange={(e)=>setId(e.target.value)}/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Data