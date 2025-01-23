import "./App.css";
import { useDeferredValue, useEffect, useState } from "react";
import SlowList from "./SlowList";

function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log("Query changed:", query);
    console.log("Deferred query changed:", deferredQuery);
    console.log("--- End of render ---");
  }, [query, deferredQuery]);

  return (
    <div className="card">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SlowList text={deferredQuery} />
    </div>
  );
}

export default App;
