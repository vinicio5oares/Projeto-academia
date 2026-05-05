import axios from "axios";

export const api = axios.create({
  baseURL: "https://sua-api.com", // coloque a URL da sua API
  headers: {
    "Content-Type": "application/json",
  },
});