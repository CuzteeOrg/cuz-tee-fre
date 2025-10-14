import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Place a new order from the user's cart
export const placeOrder = async (shippingDetails: any) => {
  try {
    const response = await api.post("/orders", { shippingDetails });
    return response.data;
  } catch (error) {
    console.error("Error placing order", error);
    throw error;
  }
};

// Fetch a user's order history
export const getUserOrders = async () => {
  try {
    const response = await api.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders", error);
    throw error;
  }
};

// Get details of a specific order
export const getOrderDetails = async (orderId: number) => {
  try {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details", error);
    throw error;
  }
};
