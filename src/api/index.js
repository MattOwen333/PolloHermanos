import axios from "axios";

const cleaver = {
  title: "Chop Cleaver",
  description: "Authentic PolloHermano's Chop Cleaver",
  photo: "https://i.ebayimg.com/images/g/DQ0AAOSwPEFbrh0R/s-l1600.jpg",
  price: "$22.99",
};

// async function createInitialUsers() {
//     try {
//       console.log("Starting to create users...");

//       await createUser({
//         username: "albert",
//         password: "bertie99",
//         name: "Al Bert",
//         location: "Sidney, Australia",
//       });
//       await createUser({
//         username: "sandra",
//         password: "2sandy4me",
//         name: "Just Sandra",
//         location: "Ain't tellin'",
//       });
//       await createUser({
//         username: "glamgal",
//         password: "soglam",
//         name: "Joshua",
//         location: "Upper East Side",
//       });

//       console.log("Finished creating users!");
//     } catch (error) {
//       console.error("Error creating users!");
//       throw error;
//     }
//   }

// async function createProduct({
//     title,
//     description,
//     photo,
//     price
//   }) {
//     try {
//       const { rows: [ product ] } = await client.query(`
//         INSERT INTO posts("authorId", description, photo, price)
//         VALUES($1, $2, $3, $4)
//         RETURNING *;
//       `, [title, description, photo, price]);

//       return product;
//     } catch (error) {
//       throw error;
//     }
//   }

// export async function fetchProducts({ name, text }) {
//   try {
//     const { data } = await axios.get("/api/products");

//     return data.products || [];
//   } catch (error) {
//     throw error;
//   }
// }

export async function fetchProducts(terms) {
  return [cleaver];
}
