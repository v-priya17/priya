import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Studentform() {
    const[name,setName]=useState("")
    const[roll_no,setRoll_no]=useState("")
    const[email,setEmail]=useState("")
    const navigate=useNavigate()

    const handleSubmit=()=>{
        const data={
            "name":name,
            "roll_no":roll_no,
            "email":email
        }
        try{
            fetch("" ,{
                method:"POST",
                headers:{'Content-type':'Application/json'},
                body:JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1));

            navigate('/biodata')
        }
        catch(error){
            console.log("err",error.message)
        }      
    }
  return (
    <div>
    <form action="">
        <h2>Student Form</h2>
        <label htmlFor="">Name </label>
        <input 
        type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <br />
        
        <label htmlFor="">Roll_no </label>
        <input 
        type="text" 
        value={roll_no}
        onChange={(e)=>setRoll_no(e.target.value)}/>
        <br />
        
        <label htmlFor="">E-mail </label>
        <input 
        type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

    </form>    
    <br />
    <button onClick={handleSubmit} className='btn btnform'>Submit</button>
    </div>
)
}

export default Studentform