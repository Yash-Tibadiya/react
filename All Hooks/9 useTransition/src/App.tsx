import { useState } from "react";
import "./App.css";
import AboutTab from "./components/AboutTab";
import ContactTab from "./components/ContactTab";
import TabButton from "./components/TabButton";
import PostsTab from "./components/PostsTab";

type Tab = "about" | "posts" | "contact";

function App() {
  const [tab, setTab] = useState<Tab>("about");

  const selectTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className="card">
      <div className="btns">
        <TabButton title="About" onClick={() => selectTab("about")} />
        <TabButton title="Posts" onClick={() => selectTab("posts")} />
        <TabButton title="Contact" onClick={() => selectTab("contact")} />
      </div>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
}

export default App;
