import React from 'react'
import { useState } from 'react'

function TodoList() {

    const[tasks,setTasks]=useState([])
    const[newtask,setNewtask]=useState("")

    function handleChange(event){
        setNewtask(event.target.value)
    }

    function addtask(){
        // if(newtask.trim() !== "")
        setTasks(t=>[...t,newtask])
        setNewtask("")
        
    }

    function deletetask(index){

        const updatedtasks=tasks.filter((element,i)=>i !== index);
        setTasks(updatedtasks)

    }
let variable="gooo "
console.log(variable.trim())
  return (
    <div>
        <h2>To-Do List</h2>
        <div>
            <input 
            type="text" 
            placeholder='Today tasks'
            value={newtask}
            onChange={handleChange}/>
            <button 
            className='btn add-btn'
            onClick={addtask}> Add Task</button>
        </div>
        <ul>
            {tasks.map((task,index)=>
               <li key={index}>
                <span >{task}</span>
                <button 
                className='btn del-btn'
                onClick={()=>deletetask(index)}> Delete</button>
            </li>)
            }
        </ul>

    </div>

  )
}

export default TodoList
