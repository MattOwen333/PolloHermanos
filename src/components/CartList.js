import React, { useState } from "react";
import Modal from "react-modal";
import { Checkout } from "./index";
const CartList = ({ cart, addProductToCart, removeProductFromCart }) => {
  const [modalCheckOutIsOpen, setCheckOutModalIsOpen] = useState(false);
  let productCount = cart.reduce((productCount, product) => {
    return productCount + product.count;
  }, 0);
  let cartPrice = cart.reduce((cartPrice, product) => {
    console.log(cartPrice, product);
    return cartPrice + product.price * product.count;
  }, 0);
  return (
    <div id="cart">
      <h3>Your Cart ({productCount} items):</h3>
      <h3>Your Total: ${cartPrice}</h3>
      <div className="CartList">
        {cart.map(({ id, name, price, count }) => (
          <p key={id}>
            <span>
              x{count} {name}
            </span>
            <br />
            <button
              className="addQuantity"
              onClick={() => addProductToCart({ id, name })}
            >
              {" "}
              +{" "}
            </button>
            <button
              className="removeQuantity"
              onClick={() => removeProductFromCart({ id })}
            >
              {" "}
              -{" "}
            </button>
          </p>
        ))}
      </div>
      <button onClick={() => setCheckOutModalIsOpen(true)}>Checkout</button>
      <Modal isOpen={modalCheckOutIsOpen}>
        <Checkout toggleModal={setCheckOutModalIsOpen}></Checkout>
      </Modal>
    </div>
  );
};
export default CartList;