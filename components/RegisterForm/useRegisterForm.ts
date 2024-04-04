import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputs } from "./types";
import { login } from "@/services";
import { useState } from "react";

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (
    data: RegisterInputs
  ) => {
    setIsLoading(true);
    console.log(data);
    try {
      // let response = await login(data);
      // console.log(response);
    } catch (e: any) {
      e.response.status == 401
        ? setError("password", { type: "wrong", message: "Wrong Credentials" })
        : setError("password", {
            type: "unknown",
            message: "Unkown error occured",
          });
    }
    setIsLoading(false);
  };

  return { register, handleSubmit, onSubmit, errors, isLoading };
};

export default useRegisterForm;
