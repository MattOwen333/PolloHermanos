const express = require("express");

const productsRouter = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../db");

productsRouter.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.send({
    products,
  });
});

productsRouter.post("/", async (req, res, next) => {
  const { title, description, photo, price } = req.body;

  const postData = { title, description, photo, price };

  try {
    const product = await createProduct(postData);

    if (product) {
      res.send({ product });
      return;
    }
    next({
      name: "Error creating product",
      message: "Fill all fields",
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

productsRouter.patch("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const { title, description, photo, price } = req.body;

  const updateFields = {};

  try {
    if (title) {
      updateFields.title = title;
    }

    if (description) {
      updateFields.description = description;
    }

    if (photo) {
      updateFields.photo = photo;
    }

    if (price) {
      updateFields.price = price;
    }

    const updateProd = await updateProduct(productId, updateFields);

    if (updateProd) {
      res.send({ product: updateProd });
    }
    next({
      name: "UpdateError",
      message: "Error updating",
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

productsRouter.delete("/:productId", async (req, res, next) => {
  try {
    const product = await getProductById(req.params.productId);

    const deleted = await deleteProduct(product.id);

    res.send({ product: deleted });
    next();
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = productsRouter;
