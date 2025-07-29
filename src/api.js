
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5100/api/auth",
  withCredentials: true,
});

export default api;
