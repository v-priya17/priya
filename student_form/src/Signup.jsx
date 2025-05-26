import React from 'react'

function Signup() {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSubmit=()=>{
        const data={
            "username":username,
            "email":email,
            "password":password
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
    <div>
        <form action="SignUp">
            <input 
            type="text" 
            value={username}
            onChange={(e)=>}/>
        </form>
    </div>
  )
}

export default Signup