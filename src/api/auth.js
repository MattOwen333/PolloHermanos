import axios from "axios";

export function storeCurrentUser(token) {
  localStorage.setItem("token", token);
}

export function getCurrentUser() {
  const user = localStorage.getItem("token");
  return user;
}

export function clearCurrentUser() {
  localStorage.removeItem("token");
}

export async function login({ username, password }) {
  try {
    const data = await axios.post("api/users/login", {
      username,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// axios.post("/user", {
//   firstName: "Fred",
//   lastName: "Flintstone",
// });

// axios({
//   method: "post",
//   url: "/login",
//   data: {
//     firstName: "Finn",
//     lastName: "Williams",
//   },
// });

// axios({
//   method: "post",
//   url: "/user/12345",
//   data: {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   },
// });

// axios({
//   method: "post",
//   url: "/login",
//   data: {
//     firstName: "Finn",
//     lastName: "Williams",
//   },
// });

// export async function getUsers() {
//   try {
//     const { data } = await axios.get(`${BASE}/users`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
