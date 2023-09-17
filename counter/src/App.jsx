
import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addCounter = () =>{
    setCounter(counter + 1)
  }

  const removeCounter = () =>{
    setCounter(counter - 1)
  }
  

  return (
    <>
      <h1>Counter Program</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addCounter}>Add</button>
      <br />
      <button onClick={removeCounter}>Remove</button>
      <br />

      <p>The Current Count is {counter}.</p>

    </>
  )
}

export default App
