import React, { useState } from "react";
import Modal from "react-modal";
import { storeCurrentUser, setCurrentUser } from "../Auth";

const Login = ({ toggleModal, setCurrentUser, setModalIsOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserLogin = (token) => {
    storeCurrentUser(token);
    setCurrentUser(token);
  };

  async function handleSubmit(event) {
    const url = `/Login`;
    event.preventDefault();

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="Login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button onClick={() => toggleModal(false)}>Login</button>
      </form>
    </div>
  );
};

// need to figure out how to display current user

export default Login;
