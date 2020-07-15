import React from "react";

const CartList = ({ cart, addProductToCart, removeProductFromCart }) => {
  let productCount = cart.reduce((productCount, product ) => {
    return productCount + product.count;
  }, 0);

  return (
    <div id="cart">
      <h3>Your cart ({productCount} items):</h3>
      <div className="CartList">
        {cart.map(({ id, name, count }) => (
          <p key={id}>
            <span>
              ({count}x) {name}
            </span>
            <br />
            <button onClick={() => addProductToCart({ id, name })}> + </button>
            <button onClick={() => removeProductFromCart({ id })}> - </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CartList;
