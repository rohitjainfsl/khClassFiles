import React, { useContext } from "react";
import LoginContext from "../LoginContext";

function Profile() {
  const { username, email } = useContext(LoginContext);
  return (
    <>
      <h2>Username: {username}</h2>
      <h2>Email: {email}</h2>
    </>
  );
}

export default Profile;
