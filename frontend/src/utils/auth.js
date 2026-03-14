export const getStoredToken = () => {
  return localStorage.getItem("parivesh_token");
};

export const getStoredUser = () => {
  try {
    const user = localStorage.getItem("parivesh_user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    localStorage.removeItem("parivesh_user");
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getStoredToken();
};

export const logoutUser = () => {
  localStorage.removeItem("parivesh_token");
  localStorage.removeItem("parivesh_user");
};