import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //! syntax
  // useEffect(() => {}, []);

  useEffect(() => {
    // The code that we want to run
    console.log("The Counter is: ", count);

    // Optional cleanup function
    return () => {
      console.log("Cleaning up...");
    }
  }, [count]); // [] - The dependency array

  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
      </div>
    </>
  );
}

export default App;
