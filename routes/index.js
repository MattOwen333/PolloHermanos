const jwt = require("jsonwebtoken");
const { getUserById } = require("../db");
const { JWT_SECRET } = process.env;

const express = require("express");
const apiRouter = express.Router();

// set `req.user` if possible
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  console.log("1");

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    console.log("3");

    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      console.log("4");

      if (id) {
        req.user = await getUserById(id);
        console.log("ID:", id);
        console.log("TOKEN:", token);
        next();
      }
    } catch ({ name, message }) {
      console.log("5");

      next({ name, message });
    }
  } else {
    console.log("6");

    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

apiRouter.use((req, res, next) => {
  console.log("7");

  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const productsRouter = require("./products");
apiRouter.use("/products", productsRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
