import React, { useState, useContext } from "react";
import LoginContext from "../LoginContext";

function Form() {
  //DESTRUCTURING
  const { handleChange, setFormSubmitted } = useContext(LoginContext);

  function handleSubmit(e){
    e.preventDefault()
    setFormSubmitted(true)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="Enter Username"
      />
      <br />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Enter Email"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
