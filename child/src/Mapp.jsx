import React from 'react'

function Mapp({login}) {
  return (
    <div>
      {login.map((loger)=> (
        <ul key={loger.id}>
          <li>{loger.name}</li>
          <li>{loger.depo}</li>
          <li>{loger.year}</li>

        </ul>
        
        ))}
        
    </div>
    
  )
}


export default Mapp