import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/child")
    }

  return (
    <div>className='text-center
    <button className='btn btn-primary' onClick={handleNavigate}>Go to Child  </button>
    <h2>Hii</h2>
    </div>
  )
}

export default Home