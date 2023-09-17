import { useState,useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0)
  

  const addValue = () => {
    if(setCounter >= 20){
      setCounter(counter)
    }
    setCounter(counter+1);

  }

  const removeValue = () =>{
    setCounter(counter-1)
  } 

  return (

    <>
      <h1>Counter :</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
