const {
  client,
  createUser,
  createProduct,
  createAdmin,
  getAllUsers,
  getAllProducts,
  getCarts,
  getUserCart,
  getAdmin,
  updateProduct,
  deleteProduct,
  addProductToCart,
} = require("./index");

async function buildTables() {
  try {
    client.connect();

    await client.query(
      ` DROP TABLE IF EXISTS cart;
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
              title varchar(255) UNIQUE NOT NULL,
              description TEXT NOT NULL,
              photo TEXT,
              price MONEY NOT NULL
            );
            CREATE TABLE cart (
              id SERIAL PRIMARY KEY,
              "userId" INTEGER REFERENCES users(id),
              "productId" INTEGER REFERENCES products(id),
              quantity INTEGER
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
      password: "max123",
      name: "Max",
      email: "max@gmail.com",
      location: "Bronx, NY",
    });
    await createUser({
      username: "therock",
      password: "rocky",
      name: "Dwayne Johnson",
      email: "rock@wwe.com",
      location: "Miami",
    });
    await createUser({
      username: "tomthemailman",
      password: "tom123",
      name: "Thomas",
      email: "tom@gmail.com",
      location: "Jacksonville",
    });
    await createUser({
      username: "adminuser",
      password: "adminpassword",
      name: "admin",
      email: "admin@supersports.com",
      location: "SSB",
    });
    await createUser({
      username: "adminuser2",
      password: "adminpassword2",
      name: "admin2",
      email: "admin2@supersports.com",
      location: "SSB",
    });

    await createAdmin("adminuser");

    await createAdmin("adminuser2");

    const users = await getAllUsers();
    console.log("---USERS:", users);

    const admins = await getAdmin();
    console.log("ADMIN USERS", admins);

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
    await createProduct({
      title: "1989-90 FLEER Charles Oakley Card",
      description:
        "Original Knicks Charles Oakley basketball card from the 1989-1990 season",

      photo:
        "https://www.picclickimg.com/d/l400/pict/353099186291_/1989-90-Fleer-103-Charles-Oakley-NM-MT.jpg",
      price: "19.99",
    });

    createProduct({
      title: "Swingman Jersey Miami Heat 2005-06 Shaquille O'Neal",
      description: "Championship year Miami Heat Diesel jersey.",
      photo:
        "https://static.mitchellandness.com/media/catalog/product/cache/e51ff606314c2cfd0e05db831c49083b/s/m/smjycp19243-mheblck05son_1.jpg",
      price: "130",
    });

    const products = await getAllProducts();
    console.log("---PRODUCTS:", products);

    const updatedProducts = await updateProduct(products[1].id, {
      price: "110",
    });
    console.log("---UPDATED PRODUCTS:", updatedProducts);

    /*--------------------------CART----------------------------*/
    await addProductToCart({
      userId: 1,
      productId: 1,
      quantity: 2,
    });

    await addProductToCart({
      userId: 1,
      productId: 2,
      quantity: 1,
    });
    /*-------------*/
    await addProductToCart({
      userId: 2,
      productId: 1,
      quantity: 1,
    });
    /*-------------*/
    await addProductToCart({
      userId: 3,
      productId: 1,
      quantity: 1,
    });
    await addProductToCart({
      userId: 3,
      productId: 2,
      quantity: 1,
    });
    await addProductToCart({
      userId: 3,
      productId: 3,
      quantity: 1,
    });

    let maxCart = await getUserCart(1);
    console.log("---MAX CART: ", maxCart);
    let tomCart = await getUserCart(3);
    console.log("---TOM CART: ", tomCart);

    const carts = await getCarts();
    console.log("---CARTS:", carts);
    /*------------------------------------------------d-----------*/
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
