import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const Navigate=useNavigate()

    const handleSubmit=()=>{
        const data={
            "username":username,
            "password":password
        }
       try{
           fetch("" ,{
                method:"post",
                headers:{'Content-type':'Application/json'},
                body: JSON.stringify(data)
             })
            .then(res=>res.json())
            .then(res1=>console.log(res1))
            // const result = await data.json()
            // console.log(result)

            Navigate("/studentform")
       }

        catch(error){
            console.log("error",error.message)
        }            
        
    }

  return (
    <div>
        <form action="">
            <h2>Login</h2>
            <label htmlFor="">Username </label>
            <input 
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <br /><br />
            
            <label htmlFor="">Password </label>
            <input 
            type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br />
        </form>
        <br />
        <button onClick={handleSubmit} className='btn btn-Login'>Login</button>
        <Link to="/signup"> SignUp</Link>
    </div>
  )
}

export default Login