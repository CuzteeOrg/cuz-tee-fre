import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001/api",
});

export async function getProducts() {
  const resp = await api.get("/products");
  return resp.data;
}

export async function getProduct(id: number) {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}
