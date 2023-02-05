import React, { useState } from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";
import LoginContext from "./LoginContext";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);


  function handleChange(e) {
    console.log(e.target.value);
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setEmail(e.target.value);
  }

  return (
    <LoginContext.Provider
      value={{ handleChange, setFormSubmitted, username, email }}
    >
      {formSubmitted ? <Profile /> : <Form />}
    </LoginContext.Provider>
  );
}

export default App;
