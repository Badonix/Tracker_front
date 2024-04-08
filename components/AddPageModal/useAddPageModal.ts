import { useForm } from "react-hook-form";
import { AddPageType } from "./types";

export const useAddPageModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPageType>();
  const onSubmit = (data: AddPageType) => {
    console.log(data);
  };
  return { onSubmit, errors, handleSubmit, register };
};
