import React from 'react'
import App from './App'

function Data({onButtonClick}) {
    const sentData =()=>{
        onButtonClick("this is a message from the child component")
    }
  return (
    <div>
        <button onClick={sentData}>Click Me</button>
    </div>
  )
}

export default Data