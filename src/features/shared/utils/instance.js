import axios from "axios";
import { API_URL } from "./constants";
import store from "@/app/store";

export const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  // Add a request interceptor to dynamically set the token
  instance.interceptors.request.use(
    (config) => {
      const token = store.getState().auth?.userData?.data?.token || "";

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
