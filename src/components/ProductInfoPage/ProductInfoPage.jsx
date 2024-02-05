import "./ProductInfoPage.css";
import {
  IMG_URL,
  PRODUCT_INFO_URL,
  PRODUCT_EMI_INFO_URL,
} from "../../utils/constant";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { ProductSpecifications } from "../index";

function ProductInfoPage() {
  const { userId } = useParams();
  let productUrl = PRODUCT_INFO_URL + userId.slice(-9);
  let productEmi = PRODUCT_EMI_INFO_URL + userId.slice(-9);
  let [fetchProductInfoData, setFetchProductData] = useState(null);
  let [fetchEmiData, setFetchEmiData] = useState(null);
  let [zoomImg, setZoomImg] = useState("");
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const urls = [productUrl, productEmi];
        const res = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(
          res.map((res) => {
            if (!res.ok) {
              throw new Error("Error Serving Data");
            }
            return res.json();
          })
        );
        setFetchProductData(data[0]?.data);
        setFetchEmiData(data[1]);
        setZoomImg(data[0]?.data?.productData?.media[0].zoomUrl);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();
  }, []);
  //   console.log(fetchProductInfoData?.productData?.summary.split("\n"));
  //   console.log(fetchEmiData)

  return (
    <>
      {!fetchProductInfoData ? (
        <Shimmer />
      ) : (
        <>
          <div>
            <section>
              <div className="flex items-center justify-start py-1 px-4 text-gray-700">
                <i className="ri-home-4-fill text-md"></i>
                {fetchProductInfoData?.productData?.breadcrumbs.map(
                  ({ name }, index) => (
                    <div key={index} className="ms-2 text-xs">
                      {`> ${name}`}
                    </div>
                  )
                )}
              </div>
            </section>
            <hr />
            <section>
              <div className="flex justify-between gap-10 px-4 pb-6">
                <div className="w-[40%] flex flex-col gap-2 relative">
                  <div className="absolute top-4 right-4">
                    <i className="ri-heart-line text-red-500 text-xl z-10"></i>
                  </div>
                  <div className="w-full flex items-center justify-center py-2">
                    <img
                      src={IMG_URL + zoomImg}
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
                    {fetchProductInfoData?.productData?.media.map(
                      ({ thumbnailUrl, zoomUrl }, index) => (
                        <SwiperSlide key={index}>
                          <div className="">
                            <img
                              src={IMG_URL + thumbnailUrl}
                              alt=""
                              className="cursor-pointer"
                              onClick={() => {
                                setZoomImg(zoomUrl);
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
                <div className="w-[35%] flex flex-col gap-8 pt-6">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-extrabold text-gray-800">
                      {fetchProductInfoData?.productData?.name}{" "}
                      <span className='text-[15px]'>{`(${fetchProductInfoData?.productData?.code})`}</span>
                    </h1>
                    <div className="flex gap-4 text-[#0B3B85]">
                      <i className="ri-share-forward-box-fill font-semibold cursor-pointer"><span className="ps-2 font-medium">Share</span></i>
                      <i className="ri-printer-line font-semibold cursor-pointer"><span className="ps-2 font-medium">Print</span></i>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-700 font-extrabold">
                      Save more with EMI/Cashback <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  transition">Read-T&C</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <i className="ri-calendar-todo-fill text-green-600 text-xl"></i>
                      {!fetchEmiData?.lowestEMIAmount ? null : (
                        <>
                          <p className="text-gray-500">
                            EMIs (Credit Cards) from ₹
                            {fetchEmiData?.lowestEMIAmount}/month.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-lg text-gray-700">Key Features</h2>
                      {fetchProductInfoData?.productData?.summary
                        .split("\n")
                        .map((item, index) => (
                            <>
                            <ul key={index} className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: item }}>
                            </ul>
                            </>
                        ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-lg text-gray-700">Return Policy</h2>
                    <ul className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm">
                      <li>
                        For return eligibility. <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  font-extrabold  transition">Read-T&C</span>
                      </li>
                      <li>
                        All accessories, product & packaging need to be returned
                        in original condition.
                      </li>
                    </ul>
                  </div>
                  <div className="font-extrabold text-gray-700">
                    Got Feedback to share on this page?{" "}
                    <span className="text-[#0B3B85] hover:underline cursor-pointer transition">report here.</span>
                  </div>
                </div>
                <div className="w-[25%] flex flex-col justify-center gap-2 pt-6">
                  <p>
                    Deal Price:{" "}
                    <span>
                      ₹{fetchProductInfoData?.productData?.price?.value}0
                    </span>
                  </p>
                  <p>
                    Offer Price:{" "}
                    <span className="line-through">
                      ₹{fetchProductInfoData?.productData?.price?.rrp}00
                    </span>
                  </p>
                  <p>
                    MRP:{" "}
                    <span className="line-through">
                      ₹{fetchProductInfoData?.productData?.price?.mrp}00
                    </span>{" "}
                    (Inclusive of all taxes)
                  </p>
                  <p>
                    You Save:{" "}
                    <span>
                      ₹{fetchProductInfoData?.productData?.price?.discount}
                    </span>
                  </p>
                  {!fetchEmiData?.lowestEMIAmount ? null : (
                    <>
                      <p>
                        EMIs (Credit Cards) from ₹
                        {fetchEmiData?.lowestEMIAmount}/month |{" "}
                        <span>View-Plans</span>
                      </p>
                    </>
                  )}
                  {!fetchProductInfoData?.productData?.freeshipping ? (
                    <>
                      <h1>FREE Shipping!</h1>
                    </>
                  ) : null}
                  <div className="flex gap-1 w-full">
                    <button className="w-full">ADD TO CART</button>
                    <button className="w-full">BUY NOW</button>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <div className=" px-6 py-3">
                <div className="flex gap-6">
                    <a href="#desc">
                        <h3 className="font-bold text-gray-800 hover:underline transition">Description</h3>
                    </a>
                    <a href="#specs">
                        <h3 className="font-bold text-gray-800 hover:underline transition">Specifications</h3>
                    </a>
                    <a href="#review">
                        <h3 className="font-bold text-gray-800 hover:underline transition">Customer Reviews</h3>
                    </a>
                </div>
                <p
                id="desc"
                  className="py-8 font-light text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: fetchProductInfoData?.productData?.description,
                  }}
                >
                  {/* {fetchProductInfoData?.productData?.description} */}
                </p>
                <h1 className="pb-8 text-xl font-bold">
                  Specifications (
                  {fetchProductInfoData?.productData?.name.length > 50
                    ? fetchProductInfoData?.productData?.name.slice(0, 50) +
                      `...`
                    : fetchProductInfoData?.productData?.name}
                  )
                </h1>
                <div id="specs" className="flex flex-col gap-7">
                  <ProductSpecifications
                    productSpecsData={
                      fetchProductInfoData?.productData?.classifications[4]
                    }
                  />
                  <ProductSpecifications
                    productSpecsData={
                      fetchProductInfoData?.productData?.classifications[0]
                    }
                  />
                  <ProductSpecifications
                    productSpecsData={
                      fetchProductInfoData?.productData?.classifications[1]
                    }
                  />
                  <ProductSpecifications
                    productSpecsData={
                      fetchProductInfoData?.productData?.classifications[2]
                    }
                  />
                  <ProductSpecifications
                    productSpecsData={
                      fetchProductInfoData?.productData?.classifications[3]
                    }
                  />
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfoPage;
