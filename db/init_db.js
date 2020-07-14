const {
  client,
  createUser,
  createProduct,
  getAllUsers,
  getAllProducts,
  updateProduct,
  deleteProduct,
  // other db methods
} = require("./index");

async function buildTables() {
  try {
    client.connect();

    await client.query(
      `
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS users;
      `
    );
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
          `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}
async function populateInitialData() {
  // create useful starting data
  try {
    /*--------------------------USERS----------------------------*/
    await createUser({
      username: "maximilian",
      password: "pass123",
      name: "Max",
      email: "max@test.com",
      location: "Bronx, NY",
    });
    await createUser({
      username: "therock",
      password: "pass123",
      name: "Dwayne Johnson",
      email: "rock@wwe.com",
      location: "Miami",
    });
    await createUser({
      username: "tomthemailman",
      password: "pass123",
      name: "Thomas",
      email: "tom@gmail.com",
      location: "Jax",
    });
    const users = await getAllUsers();
    console.log("---USERS:", users);

    /*--------------------------PRODUCTS----------------------------*/
    await createProduct({
      title: "1996 Kobe Bryant Rookie Card",
      description: "Authentic rookie Kobe Bryant collectible card.",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/61Ic8kW70ZL._AC_SY445_.jpg",
      price: "2000",
    });
    await createProduct({
      title: "Alonzo Mourning Classic Miami Heat Jersey",
      description:
        "Mens Hardwood Classics Alonzo Mourning Classic '96-'97 Miami Heat Jersey",
      photo:
        "https://static.mitchellandness.com/media/catalog/product/cache/fce1fd5366e9310e63e704e8f032380b/3/5/353JA_MHE_FGYALZ_314_2.jpg",
      price: "120",
    });
    const products = await getAllProducts();
    console.log("---PRODUCTS:", products);

    const updatedProducts = await updateProduct(products[1].id, {
      price: "110",
    });
    console.log("--UPDATED PRODUCTS:", updatedProducts);

    /*--------------------------PRODUCTS----------------------------*/
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
