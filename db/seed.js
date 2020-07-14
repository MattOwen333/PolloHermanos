const {
  client,
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  createPost,
  updatePost,
  getAllPosts,
  getPostsByUser,
} = require("./index");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
      DROP TABLE IF EXISTS order;
      DROP TABLE IF EXISTS cart;
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS users;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        location varchar(255) NOT NULL,
        active boolean DEFAULT true,
        admin boolean DEFAULT false
      );
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) NOT NULL,
        description TEXT NOT NULL,
        photo TEXT,
        price MONEY NOT NULL
      );
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id), 
        title varchar(255) NOT NULL,
        stars INTEGER, 
        review TEXT NOT NULL
      );
      CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productId",
        quantity,
        status varchar(255)
      );
      CREATE TABLE order (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        quantity INTEGER NOT NULL DEFAULT 1,
        "cartId" INTEGER REFERENCES cart(id)
      );
    `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    await createUser({
      username: "albert",
      password: "bertie99",
      name: "Al Bert",
      location: "Sidney, Australia",
    });
    await createUser({
      username: "sandra",
      password: "2sandy4me",
      name: "Just Sandra",
      location: "Ain't tellin'",
    });
    await createUser({
      username: "glamgal",
      password: "soglam",
      name: "Joshua",
      location: "Upper East Side",
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log("Starting to create products...");
    await createProduct({
      title: "Chop Cleaver",
      description: "Authentic PolloHermano's Chop Cleaver",
      photo: "https://i.ebayimg.com/images/g/DQ0AAOSwPEFbrh0R/s-l1600.jpg",
      price: "$22.99",
    });

    // await createProduct({});

    // await createProduct({});
    console.log("Finished creating products!");
  } catch (error) {
    console.log("Error creating products!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

// async function testDB() {
//   try {
//     console.log("Starting to test database...");

//     console.log("Calling getAllUsers");
//     const users = await getAllUsers();
//     console.log("Result:", users);

//     console.log("Calling updateUser on users[0]");
//     const updateUserResult = await updateUser(users[0].id, {
//       name: "Newname Sogood",
//       location: "Lesterville, KY"
//     });
//     console.log("Result:", updateUserResult);

//     console.log("Calling getAllPosts");
//     const posts = await getAllPosts();
//     console.log("Result:", posts);

//     console.log("Calling updatePost on posts[0]");
//     const updatePostResult = await updatePost(posts[0].id, {
//       title: "New Title",
//       content: "Updated Content"
//     });
//     console.log("Result:", updatePostResult);

//     console.log("Calling getUserById with 1");
//     const albert = await getUserById(1);
//     console.log("Result:", albert);

//     console.log("Finished database tests!");
//   } catch (error) {
//     console.log("Error during testDB");
//     throw error;
//   }
// }

rebuildDB()
  //.then(testDB)
  .catch(console.error)
  .finally(() => client.end());
