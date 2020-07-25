import React, { useState } from "react";
import Modal from "react-modal";
import { storeCurrentUser, setCurrentUser, login } from "../Auth";
const Checkout = ({
  toggleModal,
  setCurrentUser,
  productCount,
  cartPrice,
  addProductToCart,
  removeProductFromCart,
}) => {
  const [cart, setCart] = useState([]);
  const [creditCard, setCreditCardChange] = useState("");
  const [cvv, setCvvChange] = useState("");
  const [expirtaion, setExpChange] = useState("");
  const handleCreditCardChange = (event) => {
    setCreditCardChange(event.target.value);
  };
  const handleCvvChange = (event) => {
    setCvvChange(event.target.value);
  };
  const handleExpChange = (event) => {
    setExpChange(event.target.value);
  };
  const handleUserLogin = (token) => {
    storeCurrentUser(token);
    setCurrentUser(token);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    toggleModal(false);
  }
  return (
    <div id="Checkout">
      <h3>Payment Options</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Credit Card"
          value={creditCard}
          onChange={handleCreditCardChange}
        />
        <input
          type="CVV"
          placeholder="CVV"
          value={cvv}
          onChange={handleCvvChange}
        />
        <input
          type="Expiration Date"
          placeholder="Date"
          value={expirtaion}
          onChange={handleExpChange}
        />
        <button>Place Order</button>
      </form>
    </div>
  );
};
// need to figure out how to display current user
export default Checkout;