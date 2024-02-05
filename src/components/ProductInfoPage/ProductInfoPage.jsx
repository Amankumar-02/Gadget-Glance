import "./ProductInfoPage.css";
import { IMG_URL, PRODUCT_INFO_URL } from "../../utils/constant";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";


function ProductInfoPage() {
  const { userId } = useParams();
  let productUrl = PRODUCT_INFO_URL + userId.slice(-9);
  let [fetchHomeData, setFetchHomeData] = useState(null);
  let [zoomImg, setZoomImg] = useState("");
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(productUrl);
        if (!res.ok) {
          throw new Error("Error Serving Data");
        } else {
          const data = await res.json();
          setFetchHomeData(data?.data);
          setZoomImg(data?.data?.productData?.media[0].zoomUrl);
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
      {!fetchHomeData ? (
        <Shimmer />
      ) : (
        <>
          <div>
            <section>
              <div className="flex items-center justify-start py-1 px-4 text-gray-700">
                <i className="ri-home-4-fill text-md"></i>
                {fetchHomeData?.productData?.breadcrumbs.map(
                  ({ name }, index) => (
                    <div key={index} className="ms-2 text-sm">
                      {`> ${name}`}
                    </div>
                  )
                )}
              </div>
            </section>
            <hr />
            <section>
              <div className="flex items-center justify-center px-4 pb-6">
                <div className="w-[40%] flex flex-col gap-2 relative">
                    <div className="absolute top-4 right-4">
                        <i className="ri-heart-line text-red-500 text-xl"></i>
                    </div>
                  <div className="w-full flex items-center justify-center py-2">
                    <img
                      src={
                        IMG_URL + zoomImg
                      }
                      alt=""
                      className="max-w-[60%] max-h-none block w-auto h-auto object-contain"
                    />
                  </div>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper productSwiper px-[30px]"
                  >
                    {fetchHomeData?.productData?.media.map(
                      ({ thumbnailUrl, zoomUrl }, index) => (
                        <SwiperSlide key={index}>
                          <div className="">
                            <img
                              src={IMG_URL + thumbnailUrl}
                              alt=""
                              className="cursor-pointer"
                              onClick={()=>{setZoomImg(zoomUrl)}}
                            />
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
                <div className="w-[35%]"></div>
                <div className="w-[25%]"></div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfoPage;
