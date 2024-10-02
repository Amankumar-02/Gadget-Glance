import { useEffect, useState } from "react";
import { SERVER_APIKEY } from "../utils/constant.js";

function useApiFetch(URL) {
  const [FetchedInfo, setFetchedInfo] = useState("");
  useEffect(() => {
    const fetchRelianceData = async () => {
      if (!URL) return;
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
      }
    };

    fetchRelianceData();
  }, [URL])
  return FetchedInfo;
}

export default useApiFetch;