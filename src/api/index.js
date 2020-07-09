// const crawWurm = {
//   artist: "Richard Sardinha",
//   cmc: 6,
//   colorIdentity: ["G"],
//   colors: ["Green"],
//   flavor:
//     "The most terrifying thing about the craw wurm is probably the horrible crashing sound it makes as it speeds through the forest. This noise is so loud it echoes through the trees and seems to come from all directions at once.",
//   id: "ada04e68-5bec-59bf-8474-7e87e82da1e8",
//   imageUrl:
//     "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130527&type=card",
//   layout: "normal",
//   manaCost: "{4}{G}{G}",
//   multiverseid: 130527,
//   name: "Craw Wurm",
//   number: "257",
//   originalType: "Creature - Wurm",
//   power: "6",
//   printings: [
//     "10E",
//     "2ED",
//     "3ED",
//     "4BB",
//     "4ED",
//     "5ED",
//     "8ED",
//     "9ED",
//     "CED",
//     "CEI",
//     "FBB",
//     "LEA",
//     "LEB",
//     "M10",
//     "SUM",
//   ],
//   rarity: "Common",
//   rulings: [],
//   set: "10E",
//   setName: "Tenth Edition",
//   subtypes: ["Wurm"],
//   supertypes: [],
//   toughness: "4",
//   type: "Creature — Wurm",
//   types: ["Creature"],
// };

const Cleaver = {
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

export async function fetchCards(terms) {
  return [Cleaver];
}
