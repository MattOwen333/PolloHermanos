import React from "react";
import "./Product.css";

// const Product = ({ title, description, price, photo }) => {
//   return (
//     <div className="Product">
//       {title} - {price} <br />
//       {description} <br />
//       <img src={photo} />
//     </div>
//   );
// };

const Product = ({ title, description, price, photo }) => {
  return (
    <div className="Product">
      <div className="info">
        <p className="header">
          {title} - {price}
        </p>
        <p className="type">{description}</p>
      </div>
      <img className="preview" src={photo} />
      <div className="actions">
        <button>(+) Add item to Cart</button>
        <button>(-) Remove item from Cart</button>
      </div>
    </div>
  );
};

//   const Cleaver = {
//     title: "Chop Cleaver",
//     description: "Authentic PolloHermano's Chop Cleaver",
//     photo:
//       "https://www.knifecenter.com/item/LA33120/lamsonsharp-usa-meat-cleaver-white-polypropylene-handles",
//     price: "$22.99",
//   };

export default Product;
