import { getPageTrackings, getSinglePage } from "@/services";
import { PageType, TrackingType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const useGetSinglePage = () => {
  const [pageData, setPageData] = useState<PageType>();
  const [loading, setLoading] = useState(true);
  const [showing, setShowing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [trackingsData, setTrackingsData] = useState<TrackingType[]>();
  const [trackingsDataLoading, setTrackingsDataLoading] = useState(false);
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
  const fetchPageData = async () => {
    if (id) {
      const response = await getSinglePage({ pageId: String(id) });
      setPageData(response.data.page);
      setLoading(false);
    }
  };
  const fetchTrackingsData = async () => {
    setTrackingsDataLoading(true);
    if (id) {
      try {
        const response = await getPageTrackings(String(id));
        setTrackingsData(response.data.pageTrackings);
      } catch (e) {
        console.log(e);
      }
    }
    setTrackingsDataLoading(false);
  };

  useEffect(() => {
    fetchPageData();
    fetchTrackingsData();
  }, [id]);

  return {
    handleCopy,
    copied,
    trackingsDataLoading,
    pageData,
    formatKey,
    loading,
    showing,
    setShowing,
    trackingsData,
  };
};
export default useGetSinglePage;
