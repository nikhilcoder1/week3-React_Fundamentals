import { useState } from 'react'
import './App.css'
import Button from './component/button'

function App() {
  const [count, setCount] = useState(0)

  let name = "Nikhil";

  return (
    <div className='bg-gray-700 h-screen'>
      <h1 className='text-center text-3xl text-blue-500'>Movie List App </h1>
      <h2 className='text-center text-2xl text-blue-950'>Username : {name}</h2>
      <Button/>
    </div>

  )
}

export default App;