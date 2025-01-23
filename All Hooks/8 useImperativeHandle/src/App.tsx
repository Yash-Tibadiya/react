import "./App.css";
import { useRef } from "react";
import Counter, { CounterRef } from "./Counter";
import Textinput, { TextInputRef } from "./Textinput";

function App() {
  const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<TextInputRef>(null);

  return (
    <div className="card">
      <div style={{ margin: "10px" }}>
        <Counter ref={counterRef} />
      </div>
      <div style={{ margin: "10px" }}>
        <Textinput ref={inputRef} />
      </div>
      <button onClick={() => counterRef.current?.reset()}>
        Reset counter
      </button>
      <button onClick={() => inputRef.current?.reset()}>
        Reset input
      </button>
    </div>
  );
}

export default App;
