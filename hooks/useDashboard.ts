import { getPages } from "@/services";
import { PageType } from "@/types";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const [pagesLoading, setPagesLoading] = useState(true);
  const [pages, setPages] = useState<PageType[] | null>();
  const fetchPages = async () => {
    try {
      let pages = await getPages();
      setPages(pages.data.pages);
      setPagesLoading(false);
    } catch (e) {
      console.log(e);
      setPagesLoading(false);
    }
  };
  console.log(pages);
  useEffect(() => {
    fetchPages();
  }, []);
  return { pages, pagesLoading };
};

export default useDashboard;
