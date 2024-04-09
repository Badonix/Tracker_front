import { getSinglePage } from "@/services";
import { PageType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const useGetSinglePage = () => {
  const [pageData, setPageData] = useState<PageType>();
  const [loading, setLoading] = useState(true);
  const [showing, setShowing] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const handleCopy = () => {
    if (pageData?.apiKey) {
      navigator.clipboard
        .writeText(pageData?.apiKey)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  const formatKey = (key?: string) => {
    if (!key) {
      return "";
    }
    if (key.length <= 35) {
      return "*".repeat(key.length);
    } else {
      const asterisks = "*".repeat(35);
      return key.substring(0, key.length - 35) + asterisks;
    }
  };
  const fetch = async () => {
    if (id) {
      const response = await getSinglePage({ pageId: String(id) });
      setPageData(response.data.page);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return {
    handleCopy,
    copied,
    pageData,
    formatKey,
    loading,
    showing,
    setShowing,
  };
};
export default useGetSinglePage;
