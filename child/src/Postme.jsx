import React from 'react'
import { useState } from 'react'

function Postme() {
    const[name,setName]=useState(null)
    const[userId,setUserId]=useState("")
    const[email,setEmail]=useState("")

    const handleSubmit=()=>{
        const data={
            "title":name,
            "userId":userId,
            "email":email
        }
        try{
            fetch('https://dummyjson.com/posts/add',{
                method:'POST',
                headers:{'Content-type':'Application/json'},
                body:JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(ress=>console.log(ress))
            }
            catch(err){
                console.err("err",err.message)
            }
        }
  return (
    // <div className=''> </div>
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="number" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button onClick={handleSubmit} className='btn btn-primary'>submit</button>
    </div>
  )
}

export default Postme