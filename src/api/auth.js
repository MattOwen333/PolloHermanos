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
