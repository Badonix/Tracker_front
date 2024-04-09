import {
  createPageType,
  deletePageType,
  getSinglePageType,
  loginType,
  registerType,
} from "@/types";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

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
  const response = await instance.post("/api/page/single", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const createPage = async (data: createPageType) => {
  const response = await instance.post("/api/page", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const deletePage = async (id: string) => {
  const response = await instance.delete(`/api/page/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
