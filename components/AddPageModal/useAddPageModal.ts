import { useForm } from "react-hook-form";
import { AddPageType } from "./types";
import { createPage } from "@/services";
import { useState } from "react";
import { useRouter } from "next/router";

export const useAddPageModal = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPageType>();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: AddPageType) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await createPage(data);
      console.log(response);
      setLoading(false);
      router.push("/pages/" + response.data.page._id);
    } catch (e) {
      console.log(e);
    }
  };

  return { onSubmit, errors, loading, handleSubmit, register };
};
