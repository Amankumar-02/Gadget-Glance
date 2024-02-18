import { useEffect, useState } from "react";
import {
  Slides,
  ProductSlider,
  GreatDeals,
  BrandSection,
  ExploreProducts,
  Shimmer,
} from "../index.js";
import { HOME_URL } from "../../utils/constant.js";

function Home() {
  let [fetchHomeData, setFetchHomeData] = useState(null);
  // fetch Api
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(HOME_URL);
        if (!res.ok) {
          throw new Error("Error Serving Data");
        } else {
          const data = await res.json();
          setFetchHomeData(data?.data);
          // console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();
  }, []);

  return (
    <>
      {!fetchHomeData ? (
        <Shimmer />
      ) : (
        <>
          <section>
            <Slides liveCarousalData={fetchHomeData?.Section4[0]?.data} />
            <Slides liveCarousalData={fetchHomeData?.Section11[0]?.data} />
          </section>
          <section>
            {fetchHomeData?.Section5.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>
          <section>
            <GreatDeals greatDealsData={fetchHomeData?.Section2[0]} />
          </section>
          <section>
            {fetchHomeData?.Section12.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>
          <section>
            <Slides liveCarousalData={fetchHomeData?.Section4[1]?.data} />
          </section>
          <section>
            {fetchHomeData?.Section8.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>
          <section>
            <ExploreProducts
              exploreProductsData={fetchHomeData?.Section10[0]}
            />
            <BrandSection
              brandSelectionData={fetchHomeData?.Section9[0]?.data}
            />
          </section>
        </>
      )}
    </>
  );
}

export default Home;
