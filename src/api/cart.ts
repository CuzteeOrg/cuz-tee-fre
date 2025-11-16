import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
    // Add JWT token if user is authenticated (example)
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Fetch the current cart for the logged-in user
export const getCart = async () => {
  try {
    const response = await api.get("/cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart", error);
    throw error;
  }
};

// Add an item to the cart
export const addItemToCart = async (productId: number, quantity: number, selectedOptions: any) => {
  try {
    const response = await api.post("/cart/items", { productId, quantity, selectedOptions });
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart", error);
    throw error;
  }
};

// Update the quantity of a cart item
export const updateCartItem = async (cartItemId: number, quantity: number) => {
  try {
    const response = await api.put(`/cart/items/${cartItemId}`, { quantity });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item", error);
    throw error;
  }
};

// Remove an item from the cart
export const removeCartItem = async (cartItemId: number) => {
  try {
    const response = await api.delete(`/cart/items/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing cart item", error);
    throw error;
  }
};
