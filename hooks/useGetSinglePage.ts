import { getSinglePage } from "@/services";
import { PageType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const useGetSinglePage = () => {
  const [pageData, setPageData] = useState<PageType>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const fetch = async () => {
    if (id) {
      const response = await getSinglePage({ pageId: String(id) });
      console.log(response);
      setPageData(response.data.page);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return { pageData, loading };
};
export default useGetSinglePage;
