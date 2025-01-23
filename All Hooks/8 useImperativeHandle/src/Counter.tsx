import { forwardRef, Ref, useState, useImperativeHandle } from "react";

export type CounterRef = {
  reset: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CounterProps {}

const Counter = (props: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  // we want to expose this functions to the parent component
  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default forwardRef(Counter);
