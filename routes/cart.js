const express = require("express");
const cartRouter = express.Router();

const { getUserCart } = require("../db");

cartRouter.get("/", async (req, res) => {
  const cart = await getCarts();

  res.send({
    cart,
  });
});

cartRouter.get("/:userId", async (req, res, next) => {
  try {
    const cart = await getUserCart(req.params.userId);

    res.send({ cart });
    next();
  } catch ({ name, message }) {
    next({ name, message });
  }
});
module.exports = cartRouter;
