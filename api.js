// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://suitmedia-backend.suitdev.com/api",
});

export default api;
