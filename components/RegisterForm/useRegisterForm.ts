import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputs } from "./types";
import { signup } from "@/services";
import { useRouter } from "next/router";
import { useState } from "react";
import { useWatch } from "react-hook-form";

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm<RegisterInputs>();

  const { password: passwordValue } = useWatch({ control });
  const onSubmit: SubmitHandler<RegisterInputs> = async (
    data: RegisterInputs,
  ) => {
    setIsLoading(true);
    console.log(data);
    try {
      let response = await signup(data);
      localStorage.setItem("token", response?.data?.token);
      router.push("/dashboard");
    } catch (e: any) {
      if (e?.response?.data?.error == "Email already in use") {
        setError("email", {
          type: "Duplicate",
          message: "Email already in use",
        });
      } else if (e?.response?.data?.error == "Username exists") {
        setError("username", {
          type: "Duplicate",
          message: "Username already in use",
        });
      }
      console.log(e);
    }
    setIsLoading(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    passwordValue,
  };
};

export default useRegisterForm;
