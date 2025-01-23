import "./App.css";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export default function App() {
  const [user] = useState({
    isSubscribed: true,
    name: "You",
  });

  return (
    <div className="card">
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
