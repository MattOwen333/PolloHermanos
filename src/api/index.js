
const miamiHelmet = {
  description: `Jimmy Johnson Miami Hurricanes Autographed Riddell VSR4 Replica Helmet with "87 Champs" Inscription`,
  id: "ada04e68-5bec-59bf-8474-7e87e82da1e8",
  imageUrl: "https://ansel.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3862000/ff_3862809-d287dffc74c25d636e04_full.jpg&w=340",
  price: 200,
  name: "Signed Miami Hurricanes Helmet"
};

const kobeJersey = {
  description: "Proudly show off your Los Angeles Lakers loyalty with Los Angeles Lakers Yellow City Limited Jersey - Kobe Bryant. It's decked out in Kobe Bryant graphics to give you a stylish and authentic look that celebrate your favorite player in the league. The crisp Los Angeles Lakers graphics and bold colors that make your steadfast loyalty abundantly clear this season!",
  id: "a1901190-a766-5bf7-9dd7-9c1bdb0b4280",
  imageUrl: `https://www.nbaprojersey.net/images/los-angeles-lakers/los-angeles-lakers-city-kobe-bryant-yellow-limited-jersey.jpg`,
  price: 100,
  name: "Kobe Bryant Lakers Jersey"
};

const heatLight = {
  description: "Get ready to cheer on the Miami Heat in style with this neon light! It's great for lighting up your favorite space with some team color!",
  id: "a1901190-a766-5bf7-9dd7-9c1bdb0b4281",
  imageUrl: `https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3303000/ff_3303424_full.jpg&w=900`,
  price: 70,
  name: "Miami Heat Team Logo Neon Sign"
};

const kobeJersey2 = {
  description: "Proudly show off your Los Angeles Lakers loyalty with Los Angeles Lakers Yellow City Limited Jersey - Kobe Bryant. It's decked out in Kobe Bryant graphics to give you a stylish and authentic look that celebrate your favorite player in the league. The crisp Los Angeles Lakers graphics and bold colors that make your steadfast loyalty abundantly clear this season!",
  id: "a1901190-a766-5bf7-9dd7-9c1bdb0b4282",
  imageUrl: `https://www.nbaprojersey.net/images/los-angeles-lakers/los-angeles-lakers-city-kobe-bryant-yellow-limited-jersey.jpg`,
  price: 100,
  name: "Kobe Bryant Lakers Jersey"
};



export async function fetchProducts(terms) {
  return [
    miamiHelmet,
    kobeJersey,
    heatLight,
    kobeJersey2
  ];
}
