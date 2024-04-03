import { loginType } from "@/types";
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
