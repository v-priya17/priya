
import './App.css'
import Child from './Child'
import { useState } from 'react'
import Mapp from './Mapp'
import audio from './audio.mp3'

function App() {

  const [count,setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+2)
  }

  const loger=[
    {id:1,name:"priya",depo:"cs",year:2},
    {id:2,name:"deepika",depo:"ca"},
    {id:3,name:"dhivya",depo:"com"},
    {id:4,name:"dhina",depo:"ai"}
  ]

  return (
    <>

    {/* props */}
    <Child Name={"Justin"} Age={24} gender={"male"}/><hr></hr>
    <Child Name={"Roman reigns"} Age={44}gender={"male"}/>
    <hr />

     {/* map function return as array */}
    <Mapp login={loger} />
    <hr />

    
    {/* state */}
    <div>{count}</div>
    <button onClick={handleClick}>Upgrade Me</button>  

    <button onClick={()=>setCount(count-1)}>Degrade Me</button>
    <br /><hr />

    <audio src={audio} controls></audio>

    </>
  )
}

export default App
