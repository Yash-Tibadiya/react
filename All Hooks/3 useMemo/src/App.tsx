import "./App.css";
import { useState, useMemo } from "react";
import { initialItems } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // const selectedItem = items.find((item) => item.isSelected);

  // const selectedItem = useMemo(() => {
  //   return items.find((item) => item.isSelected);
  // }, [items]);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === count);
  }, [count, items]);

  return (
    <>
      <div className="card">
        <h1>Count: {count}</h1>
        <h1>Selected item: {selectedItem?.id}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
      </div>
    </>
  );
}

export default App;
