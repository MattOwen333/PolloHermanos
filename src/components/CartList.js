import React from "react";

const CartList = ({ cart, addProductToCart, removeProductFromCart }) => {

  let productCount = cart.reduce((productCount, product) => {
    return productCount + product.count;
  }, 0);

  let cartPrice = cart.reduce((cartPrice, product) => {
    console.log(cartPrice, product)
    return cartPrice + product.price * product.count
  }, 0)

  return (
    <div id="cart">
      <h3>Your Cart ({productCount} items):</h3>
     <h3>Your Total: ${cartPrice}</h3>
      <div className="CartList">
        {cart.map(({ id, name,price, count }) => (

          <p key={id}>
            <span>
              x{count} {name}
            </span> 
            <br />
            <button className="addQuantity" onClick={() => addProductToCart({ id, name })}> + </button>
            <button className="removeQuantity" onClick={() => removeProductFromCart({ id })}> - </button>
          </p> 
        ))}
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartList;
