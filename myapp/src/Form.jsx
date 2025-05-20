import React from 'react'

function form() {
  return (
    <div class="form">
        <h3>Login Form</h3>
    <form action="Login Form">
          <label htmlFor="Name">Name</label>
          <input type="text" /><br />
          <label htmlFor="Deparrtment">Department </label>
          <input type="text" /><br />
          <label htmlFor="">Year</label>
          <input type="number" /><br />
          <label htmlFor="">E-mail</label>
          <input type="email" />
    </form>
    </div>
          
    
  )
}

export default form