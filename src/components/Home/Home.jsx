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
import { HOMEITEMS_URL, HOMEBANNER_URL } from "../../utils/constant.js";

function Home() {
  let [fetchHomeData, setFetchHomeData] = useState(null);
  let [fetchHomeData2, setFetchHomeData2] = useState(null);
  // fetch Api
  const {data: fetchedHomeData} = useApiFetch(HOMEITEMS_URL)
  const {data: fetchedHomeData2} = useApiFetch(HOMEBANNER_URL)
  useEffect(()=>{
    if(fetchedHomeData?.data && fetchedHomeData2?.data)
    setFetchHomeData(fetchedHomeData?.data);
    setFetchHomeData2(fetchedHomeData2?.data);
  }, [fetchedHomeData, fetchedHomeData2])

  console.log(fetchHomeData?.section1[0]?.items[0]);
  return (
    <>
      {!fetchHomeData && fetchHomeData2 ? (
        <Shimmer />
      ) : (
        <>
          <section>
            <Slides liveCarousalData={fetchHomeData2?.banner1} />
          </section>

          <section className="py-4 lg:py-6">
            {fetchHomeData?.section1.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>

          

          <section>
            <GreatDeals greatDealsData={fetchHomeData2?.greatDeals} />
          </section>

          <section className="py-4 lg:py-6">
            {fetchHomeData?.section2.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>

          <section>
            <Slides liveCarousalData={fetchHomeData2?.banner3} />
          </section>

          <section className="py-4 lg:py-6">
            {fetchHomeData?.section3.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>

          <section>
            <Slides liveCarousalData={fetchHomeData2?.banner2} />
          </section>
          
          <section className="py-4 lg:py-6">
            {fetchHomeData?.section4.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>

          <section>
            <Slides liveCarousalData={fetchHomeData2?.banner1_2} />
          </section>

          <section className="py-4 lg:py-6">
            {fetchHomeData?.section5.map((item, index) => (
              <ProductSlider key={index} productSlideData={item} />
            ))}
          </section>

          <section>
            <Slides liveCarousalData={fetchHomeData2?.brandPromises} />
            <ExploreProducts
              exploreProductsData={fetchHomeData2?.exploreProductsRange}
            />
            {/* <BrandSection
              brandSelectionData={brandPromises}
            /> */}
          </section>
        </>
      )}
    </>
  );
}

export default Home;
