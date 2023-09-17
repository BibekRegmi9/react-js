import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App(props) {
  console.log("props", props);
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='bg-green-400  p-4 rounded-xl  mb-4'>Tailwind Test</h1>

      <Card username = "Bibek Regmi" btnText = "Click"/>
      <Card username = "John the don" btnText = "Visit"/>

    </>
  )
}

export default App
