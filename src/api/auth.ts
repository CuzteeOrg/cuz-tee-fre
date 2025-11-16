import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Register a new user
export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post("/auth/register", { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

// Login the user and get JWT token
export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    // Store the token in localStorage or other state management solution
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
};

// Get the current logged-in user info
export const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user", error);
    throw error;
  }
};

// Logout the user and clear the JWT token
export const logout = () => {
  localStorage.removeItem("token");
};
