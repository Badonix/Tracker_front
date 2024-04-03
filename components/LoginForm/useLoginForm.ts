import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "./types";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLoginForm;
