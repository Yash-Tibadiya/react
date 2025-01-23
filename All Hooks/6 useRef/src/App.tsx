// import "./App.css";
// import { useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countRef.current++;

//     console.log("State: ", count);
//     console.log("Ref: ", countRef.current);
//   };
//   return (
//     <div className="card">
//       <h2>Count : {count}</h2>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // focus the input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="card">
      <input ref={inputRef} type="text" placeholder="type something..." />
    </div>
  );
}

export default App;
