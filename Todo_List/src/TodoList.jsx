// import React from 'react'
// import { useState } from 'react'

// function TodoList() {

//     const[tasks,setTasks]=useState([])
//     const[newtask,setNewtask]=useState("")

//     function handleChange(event){
//         setNewtask(event.target.value)
//     }

//     function addtask(){
//         // if(newtask.trim() !== "")
//         setTasks(t=>[...t,newtask])
//         setNewtask("")
        
//     }

//     function deletetask(index){

//         const updatedtasks=tasks.filter((element,i)=>i !== index);
//         setTasks(updatedtasks)

//     }
// let variable="gooo "
// console.log(variable.trim())
//   return (
//     <div>
//         <h2>To-Do List</h2>
//         <div>
//             <input 
//             type="text" 
//             placeholder='Today tasks'
//             value={newtask}
//             onChange={handleChange}/>
//             <button 
//             className='btn add-btn'
//             onClick={addtask}> Add Task</button>
//         </div>
//         <ul>
//             {tasks.map((task,index)=>
//                <li key={index}>
//                 <span >{task}</span>
//                 <button 
//                 className='btn del-btn'
//                 onClick={()=>deletetask(index)}> Delete</button>
//             </li>)
//             }
//         </ul>

//     </div>

//   )
// }

// export default TodoList


import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TodoList() {

    const[task,setTask]=useState("")
    const[newtask,setNewtask]=useState(()=>{
    const todoItem=localStorage.getItem("Todos")
        return todoItem ? JSON.parse(todoItem) : []
    })
    const[isedit,setIsedit]=useState(false)
    const[editTaskIndex,setEditTaskIndex]=useState(null)
    const[filter,setFilter]=useState("all")

    useEffect(()=>{
        localStorage.setItem("Todos",JSON.stringify(newtask))
    },[newtask])


    const addTodos=(e)=>{
        e.preventDefault()

        if(task.trim() === ""){
            alert("task added")
            return
        }

        if(isedit){
            const updatedlist=newtask.map((item,i)=>{
                return i===editTaskIndex ?{...item, task: task} :item
            })
            setNewtask(updatedlist)
            setIsedit(false)
        }

        else{
            const newTask={
            id:Date.now() + '',
            tasks:task,
            status:"pending"
            }
            setNewtask([newTask, ...newtask])
        }
        setTask("")
    }

    const deleteTask=(item)=>{
        const confirmDelete=window.confirm(`Do you want to delete this ${item.task}`)
        if(confirmDelete){
            const updatedlist=newtask.filter((task) => task.id !== item.id)
            setNewtask(updatedlist)
        }
    }

    const editTask=(index)=>{
        setIsedit(true)
        setTask(newtask[index].tasks)
        setEditTaskIndex(index)
    }

    const toggleStatus=(id)=>{
        const updatedlist=newtask.map((item)=>{
            item.id === id ? 
            {...item, status : item.status === 'pending' ? 'completed' : 'pending'} : item
        })
        setNewtask(updatedlist)
    }

    const filteredList=newtask.filter((item)=>{
        if(filter === 'complete') return item.status === 'complete'
        if(filter === 'pending') return item.status === 'pending'
        return true
    })
  return (
    <div className="container">
        <form>
            <input type="text" 
            placeholder='Enter task'/>
            <button type="submit">{isedit ? "Update task" : "Add task"}</button>
        </form>

        <div className="compen">
            <button onClick={()=>setFilter('all')}>All tasks</button>
            <button onClick={()=>setFilter('complete')}>Completed tasks</button>
            <button onClick={()=>setFilter('pending')}>Pending tasks</button>
        </div>

        <div className="todoContainer">
            {filteredList.length>0 ? (
                filteredList.map((item,index)=>(
                     <div className="tasks" key={item.id}>
                <div>
                    <input 
                    type="checkbox" 
                    checked={item.status === 'complete'}
                    onChange={()=>toggleStatus(item.id)}
                    />
                </div>

                <div className="todo">
                    <span style={{textDecoration: item.status === 'complete' ? 'line-through':'none'}}>{item.tasks}</span>
                    <div className='btn'>
                        <button className="edit" onClick={()=> editTask(index)}>Edit</button>
                        <button className="delete" onClick={()=> deleteTask(item)}>Delete</button>
                    </div>
                </div>

            </div>

                ))
            ) : ( <p>
                    {filter === 'complete' && 'there is no complete task'}
                    {filter === 'pending' && 'there is no pending task'}
                    {filter === 'all' && 'no task available'}
                 </p>)}


        </div>
        <div className="counter">
            {filter === 'all' && <span>all task={filteredList.length} </span>}
            {filter === 'complete' && <span>complete tasks={filteredList.length} </span>}
            {filter === 'pending' && <span>pending tasks={filteredList.length} </span>}
        </div>
    </div>
  )
}

export default TodoList