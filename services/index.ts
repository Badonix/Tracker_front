import { getSinglePageType, loginType, registerType } from "@/types";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const login = async (data: loginType) => {
  const response = await instance.post("/api/user/login", data);
  return response;
};

export const signup = async (data: registerType) => {
  const response = await instance.post("/api/user/signup", data);
  return response;
};

export const me = async () => {
  const response = await instance.get("/api/user/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getPages = async () => {
  const response = await instance.get("/api/page", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getSinglePage = async (data: getSinglePageType) => {
  const response = await instance.get("/api/page/single", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
