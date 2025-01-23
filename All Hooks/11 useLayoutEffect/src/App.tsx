/* eslint-disable react-hooks/rules-of-hooks */
import { useLayoutEffect, useState } from "react";
import "./App.css";
import Button from "./Button";

const userIds = [1, 2];

function App() {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  // This artificially delays the rendering of the component
  const now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for 200ms to emulate extremely slow rendering
  }

  //! async {not blocking the UI and rendering}
  // useEffect(() => {
  //   setIsAdmin(userId === userIds[0]);
  // }, [userId]);

  //! sync {blocking the UI and rendering}
  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
  };

  return (
    <div className="card">
      <p>User ID: {userId}</p>
      <p>Is admin: {isAdmin ? "true" : "false"}</p>
      <Button title="Change user" onClick={handleChange} />
    </div>
  );
}

export default App;
