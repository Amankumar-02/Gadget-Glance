import { useEffect, useState } from "react";
import useApiFetch from "../../hooks/useApiFetch.js";
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
  const fetchedHomeData = useApiFetch(HOME_URL)
  useEffect(()=>{
    if(fetchedHomeData?.data)
    setFetchHomeData(fetchedHomeData?.data?.data);
  }, [fetchedHomeData])

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
