import React, { useState } from "react";
import "./style.css";
import Switch from "react-switch";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className={`fullscreen ${theme}`}>
      <form>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <div className="switcher">
        <label>{theme}</label>
        <Switch checked={theme === "dark"} onChange={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
