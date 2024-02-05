import "./ProductInfoPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductInfoPage() {
  const {userId} = useParams();
    let url = `https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productPage&pageId=productPage&productCode=${userId.slice(-9)}`;
    let [fetchHomeData, setFetchHomeData] = useState(null);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error Serving Data");
        } else {
          const data = await res.json();
          setFetchHomeData(data?.data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();

  }, []);
  return (
    <>
    <div className="bg-gray-600 text-white text-3xl">User: {userId.slice(-9)}</div>
    </>
  )
}

export default ProductInfoPage