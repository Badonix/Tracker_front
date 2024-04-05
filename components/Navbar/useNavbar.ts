import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const useNavbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    if (router.pathname == "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return { isLoggedIn, handleLogout };
};
