import axios from "./axiosInstance";

// Get all products
export const getProducts = async () => {
  const res = await axios.get("/api/products");
  return res.data;
};

// Add product with image
export const addProduct = async (formData) => {
  const res = await axios.post("/api/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
