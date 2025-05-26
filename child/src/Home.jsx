import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {

    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/child")
    }


    const handleNavigate1=()=>{
      navigate("/postme")
    }
    


  return (
    <div className='text-center'>
    <button className='btn btn-primary' onClick={handleNavigate}>Go to Child  </button>
    <button className='btn btn-primary' onClick={handleNavigate1}>go to postme</button>
    <h2>Hii</h2>
    </div>
  )
}

export default Home