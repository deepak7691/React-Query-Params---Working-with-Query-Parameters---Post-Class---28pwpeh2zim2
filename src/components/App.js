import React from 'react'
import '../styles/App.css';

const App = () => {
  //Write your code here
  const queryParams = new URLSearchParams(window.location.search)
  const id = queryParams.get("id")
  const name = queryParams.get("name")
  const designation = queryParams.get("designation")
  
  return (
    <div className="App">
      <div className="details">
        <p>Employee {id} named {name} works as {designation}</p>
      </div>
    </div>
  )
}

export default App;
