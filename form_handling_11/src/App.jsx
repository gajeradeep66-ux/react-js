import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        Name: <input type="text" placeholder="Enter the username"/><br /><br />
        Password: <input type="password" placeholder="Enter the password"/><br /><br />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App