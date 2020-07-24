// Connect to DB
const { Client } = require("pg");
const DB_NAME = "localhost:5432/shopperdb";
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);
// database methods

async function createUser({ username, password, name, email, location }) {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO users(username, password, name, email, location)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `,
      [username, password, name, email, location]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createAdmin(username) {
  try {
    const { rows } = await client.query(
      `
      UPDATE users
        SET admin = true
        WHERE username='${username}'
        RETURNING *;
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAdmin() {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE admin = true
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM users;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username=$1
    `,
      [username]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE id=$1
    `,
      [userId]
    );
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function createProduct({ title, description, photo, price }) {
  try {
    const rows = await client.query(
      `
      INSERT INTO products(title, description, photo, price)
      VALUES($1, $2, $3, $4);
    `,
      [title, description, photo, price]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const { rows } = await client.query(`
      SELECT title, id, photo, price, description 
      FROM products;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProductById(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      SELECT *
      FROM products
      WHERE id=${productId};
    `
    );

    if (!product) {
      throw {
        name: "NotFoundError",
        message: "product id not found",
      };
    }

    return product;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(productId, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  try {
    if (setString.length > 0) {
      await client.query(
        `
        UPDATE products
        SET ${setString}
        WHERE id=${productId}
        RETURNING *;
      `,
        Object.values(fields)
      );
    }
    return await getProductById(productId);
  } catch (error) {
    throw error;
  }
}

async function addProductToCart({ userId, productId, quantity }) {
  try {
    const { rows } = await client.query(
      `
                INSERT INTO cart("userId", "productId", quantity) 
                VALUES($1, $2, $3) 
                RETURNING *;
              `,
      [userId, productId, quantity]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserCart(userId) {
  try {
    const user = await getUserById(userId);

    const { rows: cart } = await client.query(`
          SELECT *
          FROM cart
          WHERE "userId"=${user.id};
      `);
    return cart;
  } catch (error) {
    throw error;
  }
}

async function getCarts() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM cart;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(productId) {
  await client.query(
    `
      DELETE FROM products
      WHERE id=${productId}
      RETURNING *`
  );
}

async function deleteUser(userId) {
  await client.query(
    `
      DELETE FROM users
      WHERE id=${userId}
      RETURNING *`
  );
}

// export
module.exports = {
  client,
  createUser,
  createProduct,
  createAdmin,
  getAllUsers,
  getAllProducts,
  getProductById,
  getUserByUsername,
  getUserById,
  getCarts,
  getAdmin,
  updateProduct,
  deleteProduct,
  deleteUser,
  addProductToCart,
  getUserCart,
};
