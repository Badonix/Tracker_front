import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "./types";
import { login } from "@/services";
import { useState } from "react";
import { useRouter } from "next/router";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data: LoginInputs) => {
    setIsLoading(true);
    try {
      let response = await login(data);
      localStorage.setItem("token", response?.data?.token);
      router.push("/dashboard");
    } catch (e: any) {
      e?.response?.status == 401
        ? setError("password", { type: "wrong", message: "Wrong Credentials" })
        : setError("password", {
            type: "unknown",
            message: "Unkown error occured",
          });

      console.log(e);
    }
    setIsLoading(false);
  };

  return { register, handleSubmit, onSubmit, errors, isLoading };
};

export default useLoginForm;
