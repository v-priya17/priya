import React from 'react'

function Name({setNum}) {
  return (
    <div>
        <input type="text" 
         onChange={(e)=>setNum(e.target.value)}/>
        <hr />


    </div>
  )
}

export default Name