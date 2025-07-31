import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5100/api/auth",
  withCredentials: true,
});

export const apiProduct = axios.create({
  baseURL: "http://localhost:5100/api/product",
  withCredentials: true,
});