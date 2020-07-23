const express = require("express");
const cartRouter = express.Router();

const { getCarts } = require("../db");

cartRouter.get("/", async (req, res) => {
  const cart = await getCarts();

  res.send({
    cart,
  });
});

module.exports = cartRouter;
