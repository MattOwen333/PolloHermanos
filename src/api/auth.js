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
    const data = await axios.post("/Login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}