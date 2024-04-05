import { me } from "@/services";
import { UserType } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useGetUser = () => {
  const [user, setUser] = useState<UserType | null>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fetchUser = async () => {
    setLoading(true);
    try {
      const user = await me();
      setUser(user.data.userFiltered);
      setLoading(false);
      localStorage.setItem("user", user.data.userFiltered);
    } catch (e) {
      router.push("/login");
      localStorage.clear();
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return { user, loading };
};

export default useGetUser;
