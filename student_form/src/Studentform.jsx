import React, { useState } from 'react'

function Studentform() {
    const[name,setName]=useState("")
    const[roll_no,setRoll_no]=useState("")
    const[email,setEmail]=useState("")

    const handleSubmit=()=>{
        const data={
            "name":name,
            "roll_no":roll_no,
            "email":email
        }
        try{
            fetch(             ,{
                method:"POST",
                headers:{'Content-type':'Application/json'},
                body:JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1));
        catch(error){
            console.error("err",error.message)
        }
            
        }
    }
  return (
    <form action="">
        <input 
        type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>

        <input 
        type="text" 
        value={roll_no}
        onChange={(e)=>setRoll_no(e.target.value)}/>

        <input 
        type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <button onClick={handleSubmit} className='btn btnform'>Submit</button>


    </form>    
)
}

export default Studentform