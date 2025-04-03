import {
  IMG_URL,
  PRODUCT_INFO_URL,
} from "../../utils/constant";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import {
  ProductSpecifications,
  ProductReviews,
  Shimmer,
  ProductSlider,
} from "../index";
import {
  editCartQuantityData,
  storeCartData,
  storeBuyNowData,
} from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import useApiFetch from "../../hooks/useApiFetch";

function ProductInfoPage() {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const item_code = searchParams.get("item_code");
  const productUrl = `${PRODUCT_INFO_URL}/${userId}?item_code=${item_code}`;
  // const productEmi = `${PRODUCT_EMI_INFO_URL}/${userId}`;
  const [fetchProductInfoData, setFetchProductData] = useState(null);
  const [fetchEmiData, setFetchEmiData] = useState(null);
  const [fetchPriceData, setFetchPriceData] = useState(null);
  const [fetchSimilarProducts, setFetchSimilarProducts] = useState(null);
  const [fetchReviewsData, setFetchReviewsData] = useState(null);
  const [zoomImg, setZoomImg] = useState("");

  //fetch api
  const { data: fetchedProductData } = useApiFetch(productUrl);
  // const { data: fetchedProductEmiData } = useApiFetch(productEmi);
  useEffect(() => {
    if (fetchedProductData?.data) {
      // if (fetchedProductData?.data && fetchedProductEmiData?.data) {
      setFetchProductData(fetchedProductData?.data?.info);
      setFetchEmiData(
        fetchedProductData?.data?.emiOptions?.data?.best_plan?.emi_amount
      );
      setFetchPriceData(fetchedProductData?.data?.prices);
      setFetchSimilarProducts(fetchedProductData?.data?.similarProducts);
      setFetchReviewsData(fetchedProductData?.data?.reviews);
      setZoomImg(fetchedProductData?.data?.info?.medias[0].url);
    }
    // }, [fetchedProductData, fetchedProductEmiData]);
  }, [fetchedProductData]);

  const storeData = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const addProduct = (data, data2) => {
    const filterProduct = storeData.filter(
      (item) => item?.item_code === data?.item_code
    )[0];
    if (filterProduct?.item_code === data?.item_code) {
      dispatch(
        editCartQuantityData({
          item_code: data?.item_code,
          task: "increase",
        })
      );
    } else {
      dispatch(storeCartData({ productQuantity: 1, ...data, ...data2 }));
    }
    // navigate("/cart");
    toast.success("Product Added Successfully");
  };

  const buyNow = (data, data2) => {
    dispatch(storeBuyNowData({ productQuantity: 1, ...data, ...data2 }));
    navigate("/buynow");
  };

  const [isZoomVisible, setZoomVisible] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const handleMouseMove = (e) => {
    if (window.innerWidth > 1024) {
      setZoomVisible(true);
      const rect = e.target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomStyle({
        transformOrigin: `${x}% ${y}%`,
        transform: "scale(3)",
      });
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setZoomVisible(false);
      setZoomStyle({ transform: "scale(1)" });
    }
  };

  console.log(fetchProductInfoData);
  return (
    <>
      {!fetchProductInfoData ? (
        <Shimmer />
      ) : (
        <>
          <div>
            <section>
              <div className="flex items-center justify-start flex-wrap py-1 px-4 text-gray-700 max-h-[45px] overflow-hidden">
                <i className="ri-home-4-fill text-base"></i>
                {/* {fetchProductInfoData?.attributes?.categories.map(
                  ({ name }, index) => (
                    <div key={index} className="ms-2 text-xs">
                      {`> ${
                        name.length > 80 ? name.slice(0, 80) + "..." : name
                      }`}
                    </div>
                  )
                )} */}
                <div className="ms-2 text-xs">
                  Home Page {">"} {fetchProductInfoData?.categories[0].name}{" "}
                  {">"}{" "}
                  {fetchProductInfoData?.name.length > 80
                    ? fetchProductInfoData?.name.slice(0, 80) + "..."
                    : fetchProductInfoData?.name}
                </div>
              </div>
            </section>
            <hr />
            <section>
              <div className="flex flex-col lg:flex-row justify-between gap-10 px-4 pb-6">
                <div className="w-full lg:w-2/5 flex flex-col gap-2 relative">
                  <div className="absolute top-4 right-4">
                    <i className="ri-heart-line text-red-500 text-xl z-10"></i>
                  </div>
                  <div className="w-full flex items-center justify-center py-2">
                    <img
                      src={zoomImg}
                      alt=""
                      className="max-w-[60%] w-auto h-auto object-contain p-4"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                      640: { slidesPerView: 4 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 4 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper productSwiper px-8 h-auto"
                  >
                    {fetchProductInfoData?.medias.map(
                      ({ url, zoomUrl }, index) => (
                        <SwiperSlide key={index}>
                          <div className="px-2">
                            <img
                              src={url}
                              alt=""
                              className="cursor-pointer"
                              onClick={() => setZoomImg(url)}
                            />
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>

                <div className="relative w-full lg:w-3/5 flex flex-wrap">
                  {/* Zoomed Image (popup) */}
                  {isZoomVisible && (
                    <div className="absolute top-[2%] left-[0%] h-[70vh] p-2 bg-white border border-gray-300 overflow-hidden">
                      <img
                        src={zoomImg}
                        alt="Zoomed"
                        className="w-full h-full object-cover transition-transform duration-200 ease-in-out p-4"
                        style={zoomStyle}
                      />
                    </div>
                  )}

                  <div className="w-full flex flex-col gap-2 py-4">
                    <h1 className="w-[86%] leading-5 text-lg font-extrabold text-gray-800">
                      {fetchProductInfoData?.name}{" "}
                      <span className="text-[15px]">{`(${fetchProductInfoData?.uid})`}</span>
                    </h1>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 text-[#0B3B85]">
                      {fetchProductInfoData?._custom_json?._app
                        ?.ratingsCount ? (
                        <div className="flex gap-2 items-center">
                          <div className="text-yellow-500 font-medium text-lg">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                          </div>
                          <p className="text-black font-semibold">
                            {
                              fetchProductInfoData?._custom_json?._app
                                ?.averageRating
                            }
                          </p>
                          <p>
                            (
                            {
                              fetchProductInfoData?._custom_json?._app
                                ?.ratingsCount
                            }{" "}
                            Ratings &{" "}
                            {
                              fetchProductInfoData?._custom_json?._app
                                ?.reviewsCount
                            }{" "}
                            Reviews)
                          </p>
                        </div>
                      ) : null}
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

                  <div className="w-full lg:w-3/5 flex flex-col gap-8 py-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-700 font-extrabold">
                        Save more with EMI/Cashback{" "}
                        <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer transition-all">
                          Read-T&C
                        </span>
                      </p>
                      <div className="flex items-center gap-2">
                        <i className="ri-calendar-todo-fill text-green-600 text-xl"></i>
                        {fetchEmiData ? (
                          <p className="text-gray-500">
                            EMIs (Credit Cards) from ₹{fetchEmiData}/month.
                          </p>
                        ) : (
                          <p className="text-gray-500">
                            EMI options not available.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 w-[96%] lg:w-[90%] ">
                      <h2 className="font-bold text-lg text-gray-700">
                        Key Features
                      </h2>
                      {/* <ul
                        className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: fetchProductInfoData?.productData?.summary,
                        }}
                      ></ul> */}
                      <div className="max-h-[200px] lg:max-h-[300px] overflow-hidden overflow-y-scroll scrollbar-hidden">
                        <ul className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm ">
                          {fetchProductInfoData?.highlights.map(
                            (items, index) => (
                              <li key={index}>{items}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 w-[96%] lg:w-[90%]">
                      <h2 className="font-bold text-lg text-gray-700">
                        Return Policy
                      </h2>
                      <ul className="flex flex-col ms-6 gap-2 list-disc text-gray-600 text-sm">
                        <li>
                          For return eligibility.{" "}
                          <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  font-extrabold transition-all">
                            Read-T&C
                          </span>
                        </li>
                        <li>
                          All accessories, product & packaging need to be
                          returned in original condition.
                        </li>
                      </ul>
                    </div>
                    <div className="font-extrabold text-gray-700 w-[96%] lg:w-[90%]">
                      Got Feedback to share on this page?{" "}
                      <span className="text-[#0B3B85] text-[13px] hover:underline cursor-pointer  font-extrabold transition-all">
                        report here.
                      </span>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5 flex flex-col gap-2 py-4">
                    <p className="text-lg text-gray-800">
                      Deal Price:{" "}
                      <span className="text-xl text-[#0B3B85] font-semibold">
                        {fetchPriceData?.price?.effective?.max.toLocaleString(
                          "en-IN",
                          { style: "currency", currency: "INR" }
                        )}
                      </span>
                    </p>
                    {/* {fetchProductInfoData?._custom_json?.mrp && (
                      <p className="text-lg text-gray-800">
                        Offer Price:{" "}
                        <span className="line-through text-sm">
                          ₹{fetchProductInfoData?._custom_json?.offer_price}.00
                        </span>
                      </p>
                    )} */}
                    <p className="text-lg text-gray-800">
                      MRP:{" "}
                      <span className="line-through text-sm">
                        ₹{fetchPriceData?.price?.marked?.max}.00
                      </span>{" "}
                      <span className="text-base">
                        (Inclusive of all taxes)
                      </span>
                    </p>
                    <p className="text-green-600 text-sm font-semibold">
                      You Save: ₹{fetchPriceData?.discount}
                    </p>


                    {fetchEmiData ? (
                      <p className="text-sm font-semibold text-gray-800">
                        EMIs (Credit Cards) from ₹
                        {fetchEmiData}/month{" "}
                        {/* <span className="text-[#0B3B85] hover:underline cursor-pointer transition-all">
                          View-Plans
                        </span> */}
                      </p>
                    ) : null}
                    {fetchProductInfoData?._custom_json?.free_shippable && (
                      <h1 className="font-extrabold text-lg text-gray-800">
                        FREE Shipping!
                      </h1>
                    )}

                    
                    <div className="flex gap-2 w-full">
                      <button
                        className="bg-red-500 text-white p-2 text-lg font-semibold rounded-lg active:scale-[0.9]"
                        onClick={() => addProduct(fetchProductInfoData, fetchPriceData)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className="bg-orange-500 text-white p-2 text-lg font-semibold rounded-lg active:scale-[0.9]"
                        onClick={() => buyNow(fetchProductInfoData, fetchPriceData)}
                      >
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
                <div className="flex gap-2 lg:gap-6 sticky top-[140px] lg:top-[108px] left-0 bg-white py-1">
                  <a href="#desc">
                    <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:underline transition-all">
                      Description
                    </h3>
                  </a>
                  <a href="#specs">
                    <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:underline transition-all">
                      Specifications
                    </h3>
                  </a>
                  <a href="#review">
                    <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:underline transition-all">
                      Customer Reviews
                    </h3>
                  </a>
                  <a href="#similarProducts">
                    <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:underline transition-all">
                      Similar Products
                    </h3>
                  </a>
                </div>

                <p
                  id="desc"
                  className="pt-[160px] lg:pt-[140px] font-light text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: fetchProductInfoData?.attributes?.product_details,
                  }}
                ></p>

                <h1
                  id="specs"
                  className="pt-[160px] lg:pt-[140px] text-lg lg:text-2xl leading-5 lg:leading-none font-bold text-gray-800"
                >
                  Specifications (
                  {fetchProductInfoData?.name.length > 50
                    ? fetchProductInfoData?.name.slice(0, 50) + "..."
                    : fetchProductInfoData?.name}
                  )
                </h1>

                <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-4">
                  {fetchProductInfoData?.grouped_attributes.map(
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
                  className="pt-[160px] lg:pt-[140px] text-lg lg:text-2xl leading-5 lg:leading-none font-bold text-gray-800"
                >
                  Customer Reviews{" "}
                  <span className="text-[#0B3B85] leading-5 lg:leading-none text-sm lg:text-base font-semibold">
                    (
                    {fetchProductInfoData?.name.length > 80
                      ? fetchProductInfoData?.name.slice(0, 80) + "..."
                      : fetchProductInfoData?.name}
                    )
                  </span>
                </h1>

                {!fetchProductInfoData?._custom_json?._app?.ratingsCount ? (
                  <p className="py-4 text-gray-700">
                    There are no reviews for this product yet.
                  </p>
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
                        {
                          fetchProductInfoData?._custom_json?._app
                            ?.averageRating
                        }
                        /5
                      </p>
                      <p className="text-gray-600 font-semibold text-sm">
                        (
                        {fetchProductInfoData?._custom_json?._app?.ratingsCount}{" "}
                        Ratings &{" "}
                        {fetchProductInfoData?._custom_json?._app?.reviewsCount}{" "}
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
                    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-4">
                      {fetchReviewsData?.data?.reviews.map((item, index) => (
                        <ProductReviews key={index} productReviewData={item} />
                      ))}
                    </div>
                  </>
                )}

                <div id="similarProducts" className="pt-[160px] lg:pt-[140px] text-lg lg:text-2xl leading-5 lg:leading-none font-bold text-gray-800">
                  {fetchSimilarProducts.map((item, index) => (
                    <ProductSlider key={index} productSlideData={item} />
                  ))}
                </div>
              </div>
            </section>
            <section></section>
          </div>
        </>
      )}
    </>
  );
}

export default ProductInfoPage;
