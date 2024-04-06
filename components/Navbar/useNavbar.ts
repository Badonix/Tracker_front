import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const useNavbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentRoute = router.pathname;
  const handleLogout = () => {
    localStorage.clear();
    if (currentRoute == "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return { isLoggedIn, currentRoute, handleLogout };
};
