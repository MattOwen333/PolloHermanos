const { Client } = require('pg');

const client = new Client('postgres://localhost:5432/gp-dev');

async function createUser({ 
  username, 
  password,
  name,
  location
}) {
  try {
    const { rows: [ user ] } = await client.query(`
      INSERT INTO users(username, password, name, location) 
      VALUES($1, $2, $3, $4) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `, [username, password, name, location]);

    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, fields = {}) {
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }"=$${ index + 1 }`
  ).join(', ');

  if (setString.length === 0) {
    return;
  }

  try {
    const { rows: [ user ] } = await client.query(`
      UPDATE users
      SET ${ setString }
      WHERE id=${ id }
      RETURNING *;
    `, Object.values(fields));

    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT id, username, name, location, active 
      FROM users;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const { rows: [ user ] } = await client.query(`
      SELECT id, username, name, location, active
      FROM users
      WHERE id=${ userId }
    `);

    if (!user) {
      return null
    }

    user.posts = await getPostsByUser(userId);

    return user;
  } catch (error) {
    throw error;
  }
}

async function createProduct({
  title,
  description,
  photo,
  price
}) {
  try {
    const { rows: [ product ] } = await client.query(`
      INSERT INTO posts("authorId", description, photo, price) 
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [title, description, photo, price]);

    return product;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(id, fields = {}) {
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }"=$${ index + 1 }`
  ).join(', ');

  if (setString.length === 0) {
    return;
  }

  try {
    const { rows: [ product ] } = await client.query(`
      UPDATE products
      SET ${ setString }
      WHERE id=${ id }
      RETURNING *;
    `, Object.values(fields));

    return product;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM products;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

// async function getPostsByUser(userId) {
//   try {
//     const { rows } = await client.query(`
//       SELECT * 
//       FROM posts
//       WHERE "authorId"=${ userId };
//     `);

//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

module.exports = {  
  client,
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  createProduct,
  updateProduct,
  getAllProducts
  // getPostsByUser
}