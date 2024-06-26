import { deletePage } from "@/services";
import { useRouter } from "next/router";
import { useState } from "react";

export const usePageCard = () => {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();
  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deletePage(id);
      setLoading(false);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return { loading, handleDelete, confirm, setConfirm };
};
