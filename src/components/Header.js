import React, { useState } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ReactDOM from "react-dom";
import { storeCurrentUser, clearCurrentUser } from "../Auth";
import Modal from "react-modal";
// import { Register, Login } from "./components";

const Header = ({ currentUser, setCurrentUser, Login, Register }) => {
  const [selectedUser, setSelectedUser] = useState();
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserLogin = (event) => {
    storeCurrentUser(selectedUser);
    setCurrentUser(selectedUser);
  };

  // do i need to move handleUserLogin into the login component
  // so that i can store it in localstorage

  const handleUserLogout = (event) => {
    clearCurrentUser();
  };

  // how should i change or remove some of these states

  return (
    <header>
      <h1>Retro Sports Memorabilia</h1>
      <Router>
        <NavLink to="/products" activeClassName="current">
          Products
        </NavLink>
        <NavLink to="/cart" activeClassName="current">
          Your Cart
        </NavLink>
      </Router>
      {currentUser ? (
        <>
          <button onClick={handleUserLogout}>LOG OUT, {currentUser}</button>
        </>
      ) : (
        <>
          <button onClick={() => SetModalIsOpen(true)}>Login</button>
          <Modal isOpen={modalIsOpen}>
            <Login></Login>
          </Modal>
          <button onClick={() => SetModalIsOpen(true)}>Register</button>
          <Modal isOpen={modalIsOpen}>
            <Register toggleModal={SetModalIsOpen}></Register>
          </Modal>
        </>
      )}
    </header>
  );
};

export default Header;
