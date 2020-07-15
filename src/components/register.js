import React, { useState } from "react";

const Register = ({ setResults }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const register = await createUser({
      username,
      password,
      name,
      location,
    });

    // if not logged in show register
    // could call a function for slideup
  }

  return (
    <div id="Register">
      <h3>Look up cards here...</h3>
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
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Register;
