import { me } from "@/services";
import { UserType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const [user, setUser] = useState<UserType | null>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const fetchUser = async () => {
    setLoading(true);
    try {
      const user = await me();
      setUser(user.data.userFiltered);
      setLoading(false);
    } catch (e) {
      router.push("/login");
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return { user, loading };
};

export default useDashboard;
