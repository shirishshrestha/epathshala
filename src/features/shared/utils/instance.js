import axios from "axios";
import { API_URL } from "./constants";

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
