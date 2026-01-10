import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-700 h-screen'>
      <h1 className='text-center text-3xl text-blue-500'>Movie List App</h1>
    </div>
  )
}

export default App;