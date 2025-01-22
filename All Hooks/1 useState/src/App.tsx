import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((count) => count + 1)
  }
  const decrement = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button onClick={increment}>
          +1
        </button>
        <button onClick={decrement}>
          -1
        </button>
      </div>
    </>
  );
}

export default App
