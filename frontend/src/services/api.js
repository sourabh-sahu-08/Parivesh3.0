import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("parivesh_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const isAuthPage =
        window.location.pathname === "/login" ||
        window.location.pathname === "/register" ||
        window.location.pathname === "/forgot-password" ||
        window.location.pathname === "/reset-password";

      if (!isAuthPage) {
        localStorage.removeItem("parivesh_token");
        localStorage.removeItem("parivesh_user");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;