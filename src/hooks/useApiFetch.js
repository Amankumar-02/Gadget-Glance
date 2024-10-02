import { useEffect, useState } from "react";
import { SERVER_APIKEY } from "../utils/constant.js";

function useApiFetch(URL) {
  const [fetchedInfo, setFetchedInfo] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchRelianceData = async () => {
      if (!URL) return;
      setLoading(true);
      try {
        const res = await fetch(URL, { headers: { apikey: SERVER_APIKEY } });
        if (!res.ok) {
          throw new Error("Error Serving Reliance Data");
        } else {
          const data = await res.json();
          setFetchedInfo(data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelianceData();
  }, [URL])
  return {data: fetchedInfo, loading};
}

export default useApiFetch;