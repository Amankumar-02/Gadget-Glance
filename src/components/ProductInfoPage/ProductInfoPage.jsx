import "./ProductInfoPage.css";
import {
  IMG_URL,
  PRODUCT_INFO_URL,
  PRODUCT_EMI_INFO_URL,
} from "../../utils/constant";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { ProductSpecifications, ProductReviews, Shimmer } from "../index";
import { storeCartData } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import useApiFetch from "../../hooks/useApiFetch";

function ProductInfoPage() {
  const { userId } = useParams();
  const productUrl = `${PRODUCT_INFO_URL}/${userId}`;
  const productEmi = `${PRODUCT_EMI_INFO_URL}/${userId}`;
  const [fetchProductInfoData, setFetchProductData] = useState(null);
  const [fetchEmiData, setFetchEmiData] = useState(null);
  const [zoomImg, setZoomImg] = useState("");

  //fetch api
  const {data: fetchedProductData} = useApiFetch(productUrl);
  const {data: fetchedProductEmiData} = useApiFetch(productEmi);
  useEffect(() => {
    if (fetchedProductData?.data && fetchedProductEmiData?.data) {
      setFetchProductData(fetchedProductData?.data?.data);
      setFetchEmiData(fetchedProductEmiData?.data);
      setZoomImg(fetchedProductData?.data?.data?.productData?.media[0].zoomUrl);
    }
  }, [fetchedProductData, fetchedProductEmiData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (data) => {
    dispatch(storeCartData({ productQuantity: 1, ...data }));
    navigate("/cart");
    toast.success("Product Added Successfully");
  };

  return (
    <>
      {!fetchProductInfoData ? (
        <Shimmer />
      ) : (
        <>
          <div>
            <section>
              <div className="flex items-center justify-start flex-wrap py-1 px-4 text-gray-700">
                <i className="ri-home-4-fill text-base"></i>
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
              <div className="flex justify-between gap-10 flex-col lg:flex-row px-4 pb-6">
                <div className="w-full lg:w-[40%] flex flex-col gap-2 relative">
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
                <div className="w-full lg:w-[60%] flex flex-wrap">
                  <div className="w-full flex flex-col gap-2 py-4">
                    <h1 className="w-[86%] leading-5 text-lg font-extrabold text-gray-800">
                      {fetchProductInfoData?.productData?.name}{" "}
                      <span className="text-[15px]">{`(${fetchProductInfoData?.productData?.code})`}</span>
                    </h1>
                    <div className="flex gap-1 lg:gap-4 flex-col lg:flex-row lg:items-center text-[#0B3B85]">
                      {!fetchProductInfoData?.productData
                        ?.numberOfRatings ? null : (
                        <>
                          <div className="flex gap-2 items-center">
                            <div className="text-yellow-500 font-medium text-lg">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-line"></i>
                            </div>
                            <p>
                              (
                              {
                                fetchProductInfoData?.productData
                                  ?.numberOfRatings
                              }{" "}
                              Ratings &{" "}
                              {
                                fetchProductInfoData?.productData
                                  ?.numberOfReviews
                              }{" "}
                              Reviews)
                            </p>
                          </div>
                        </>
                      )}
                      <div className="flex gap-2 lg:gap-4">
                        <i className="ri-share-forward-box-fill font-semibold cursor-pointer">
                          <span className="ps-2 font-medium">Share</span>
                        </i>
                        <i className="ri-printer-line font-semibold cursor-pointer">
                          <span className="ps-2 font-medium">Print</span>
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[60%] flex flex-col gap-8 py-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-700 font-extrabold">
                        Save more with EMI/Cashback{" "}
                        <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  transition">
                          Read-T&C
                        </span>
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
                      <h2 className="font-bold text-lg text-gray-700">
                        Key Features
                      </h2>
                      <ul
                        className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: fetchProductInfoData?.productData?.summary,
                        }}
                      ></ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2 className="font-bold text-lg text-gray-700">
                        Return Policy
                      </h2>
                      <ul className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm">
                        <li>
                          For return eligibility.{" "}
                          <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  font-extrabold  transition">
                            Read-T&C
                          </span>
                        </li>
                        <li>
                          All accessories, product & packaging need to be
                          returned in original condition.
                        </li>
                      </ul>
                    </div>
                    <div className="font-extrabold text-gray-700">
                      Got Feedback to share on this page?{" "}
                      <span className="text-[#0B3B85] hover:underline cursor-pointer transition">
                        report here.
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[40%] flex flex-col gap-2 py-4">
                    <p className="text-lg text-gray-800">
                      Deal Price:{" "}
                      <span className="text-xl text-[#0B3B85] font-semibold">
                        {fetchProductInfoData?.productData?.price?.value.toLocaleString(
                          "en-IN",
                          {
                            style: "currency",
                            currency: "INR",
                          }
                        )}
                      </span>
                    </p>
                    {!fetchProductInfoData?.productData?.price?.rrp ? null : (
                      <>
                        <p className="text-lg text-gray-800">
                          Offer Price:{" "}
                          <span className="line-through text-sm">
                            ₹{fetchProductInfoData?.productData?.price?.rrp}.00
                          </span>
                        </p>
                      </>
                    )}
                    <p className="text-lg text-gray-800">
                      MRP:{" "}
                      <span className="line-through text-sm">
                        ₹{fetchProductInfoData?.productData?.price?.mrp}.00
                      </span>{" "}
                      <span className="text-base">
                        (Inclusive of all taxes)
                      </span>
                    </p>
                    <p className="text-green-600 text-sm font-semibold">
                      You Save:{" "}
                      <span>
                        ₹{fetchProductInfoData?.productData?.price?.discount}
                      </span>
                    </p>
                    {!fetchEmiData?.lowestEMIAmount ? null : (
                      <>
                        <p className="text-sm font-semibold text-gray-800">
                          EMIs (Credit Cards) from ₹
                          {fetchEmiData?.lowestEMIAmount}/month |{" "}
                          <span className="text-[#0B3B85] hover:underline cursor-pointer transition">
                            View-Plans
                          </span>
                        </p>
                      </>
                    )}
                    {!fetchProductInfoData?.productData?.freeshipping ? (
                      <>
                        <h1 className="font-extrabold text-lg text-gray-800">
                          FREE Shipping!
                        </h1>
                      </>
                    ) : null}
                    <div className="flex gap-1 w-full">
                      <button
                        className="w-full bg-red-500 text-white p-2 text-lg font-semibold"
                        onClick={() => addProduct(fetchProductInfoData)}
                      >
                        ADD TO CART
                      </button>
                      <button className="w-full bg-orange-500 text-white p-2 text-lg font-semibold">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <div className="relative px-4 lg:px-6 py-3">
                <div className="flex gap-2 lg:gap-6 sticky top-[105px] lg:top-[84px] left-0 bg-white">
                  <a href="#desc">
                    <h3 className="font-bold text-gray-800 hover:underline transition">
                      Description
                    </h3>
                  </a>
                  <a href="#specs">
                    <h3 className="font-bold text-gray-800 hover:underline transition">
                      Specifications
                    </h3>
                  </a>
                  <a href="#review">
                    <h3 className="font-bold text-gray-800 hover:underline transition">
                      Customer Reviews
                    </h3>
                  </a>
                </div>
                <p
                  id="desc"
                  className="py- pt-[132px] lg:pt-[120px] font-light text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: fetchProductInfoData?.productData?.description,
                  }}
                ></p>
                <h1
                  id="specs"
                  className="pb- pt-[132px] lg:pt-[120px] text-lg lg:text-2xl leading-5 lg:leading-none font-bold text-gray-800"
                >
                  Specifications (
                  {fetchProductInfoData?.productData?.name.length > 50
                    ? fetchProductInfoData?.productData?.name.slice(0, 50) +
                      `...`
                    : fetchProductInfoData?.productData?.name}
                  )
                </h1>
                <div className="flex flex-col gap-7">
                  {fetchProductInfoData?.productData?.classifications.map(
                    (item, index) => (
                      <ProductSpecifications
                        key={index}
                        productSpecsData={item}
                      />
                    )
                  )}
                </div>
                <h1
                  id="review"
                  className="py- pt-[132px] lg:pt-[120px] text-lg lg:text-2xl leading-5 lg:leading-none font-bold text-gray-800"
                >
                  Customer Reviews{" "}
                  <span className="text-[#0B3B85] leading-5 lg:leading-none text-sm lg:text-base font-semibold">
                    (
                    {fetchProductInfoData?.productData?.name.length > 150
                      ? fetchProductInfoData?.productData?.name.slice(0, 150) +
                        `...`
                      : fetchProductInfoData?.productData?.name}
                    )
                  </span>
                </h1>
                {!fetchProductInfoData?.productData?.numberOfRatings ? (
                  <>
                    <p className="py-4 text-gray-700">
                      There are no reviews for this product yet.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center py-4 gap-2">
                      <div className="text-yellow-500 font-medium text-lg">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                      </div>
                      <p className="text-xs text-yellow-600 font-semibold">
                        {fetchProductInfoData?.productData?.averageRating}/5
                      </p>
                      <p className="text-gray-600 font-semibold text-sm">
                        ({fetchProductInfoData?.productData?.numberOfRatings}{" "}
                        Ratings &{" "}
                        {fetchProductInfoData?.productData?.numberOfReviews}{" "}
                        Reviews)
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-[#0B3B85] border border-[#0B3B85] py-1 px-4 lg:px-10 text-xs lg:text-sm font-semibold">
                        WRITE A REVIEW
                      </button>
                      <p className="text-[#0B3B85] font-semibold text-sm lg:text-base">
                        (Read-T&C)
                      </p>
                    </div>
                    {fetchProductInfoData?.productData?.reviews.map(
                      (item, index) => (
                        <ProductReviews key={index} productReviewData={item} />
                      )
                    )}
                  </>
                )}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfoPage;
