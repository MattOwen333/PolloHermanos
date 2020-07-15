
const crawWurm = {
  artist: "Richard Sardinha",
  cmc: 6,
  colorIdentity: ["G"],
  colors: ["Green"],
  flavor: `Jimmy Johnson Miami Hurricanes Autographed Riddell VSR4 Replica Helmet with "87 Champs" Inscription`,
  id: "ada04e68-5bec-59bf-8474-7e87e82da1e8",
  imageUrl: "https://ansel.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3862000/ff_3862809-d287dffc74c25d636e04_full.jpg&w=340",
  layout: "normal",
  manaCost: "$200",
  multiverseid: 130527,
  name: "Signed Miami Hurricanes Helmet",
  number: "257",
  originalType: "",
  power: "6",
  printings: ["10E", "2ED", "3ED", "4BB", "4ED", "5ED", "8ED", "9ED", "CED", "CEI", "FBB", "LEA", "LEB", "M10", "SUM"],
  rarity: "Common",
  rulings: [],
  set: "10E",
  setName: "Tenth Edition",
  subtypes: ["Wurm"],
  supertypes: [],
  toughness: "4",
  type: "",
  types: ["Creature"]
};

const demolish = {
  artist: "Gary Ruddell",
  cmc: 4,
  colorIdentity: ["R"],
  colors: ["Red"],
  flavor: "Proudly show off your Los Angeles Lakers loyalty with Los Angeles Lakers Yellow City Limited Jersey - Kobe Bryant. It's decked out in Kobe Bryant graphics to give you a stylish and authentic look that celebrate your favorite player in the league. The crisp Los Angeles Lakers graphics and bold colors that make your steadfast loyalty abundantly clear this season!",
  id: "a1901190-a766-5bf7-9dd7-9c1bdb0b4280",
  imageUrl: `https://www.nbaprojersey.net/images/los-angeles-lakers/los-angeles-lakers-city-kobe-bryant-yellow-limited-jersey.jpg`,
  layout: "normal",
  manaCost: "$100",
  multiverseid: 129522,
  name: "Kobe Bryant Lakers Jersey",
  number: "196",
  originalText: "Destroy target artifact or land.",
  originalType: "Sorcery",
  printings: ["10E", "8ED", "9ED", "AVR", "KLD", "M11", "M14", "MB1", "ODY", "ORI", "THS", "WAR", "WC03", "XLN", "ZEN"],
  rarity: "Common",
  rulings: [],
  set: "10E",
  setName: "Tenth Edition",
  subtypes: [],
  supertypes: [],
  text: "",
  type: "",
  types: ["Sorcery"]
};

export async function fetchProducts(terms) {
  return [
    crawWurm,
    demolish
  ];
}
