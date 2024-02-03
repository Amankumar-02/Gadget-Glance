import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductSlider.css";
import { Pagination, Navigation } from "swiper/modules";

function ProductSlider({ data }) {
  const productData = data;
  // console.log(data);
  return (
    <>
      {!productData ? null : (
        <>
          <div className="py-8 px-10">
            <div className="flex">
              <h1 className="me-4 font-semibold">{data?.name}</h1>
              <a href={data?.viewAllUrl} target="_blank">
                <button className="bg-[#003380] text-white text-xs px-4 py-1 font-semibold">
                  View all
                </button>
              </a>
            </div>
            <div className="pt-10">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper productSwiper px-[30px]"
              >
                {data?.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="productItemHover relative">
                      {!item?.teaserType?(null):(
                        <>
                        <div className="absolute top-0 left-0 text-xs text-white bg-[#007FAD] font-semibold px-2 z-10 rounded-tl-lg rounded-br-lg">
                          Limited Time Offer
                        </div>
                        </>
                      )}
                      <div className="productImg">
                        <img
                          src={`https://www.reliancedigital.in/${item?.imageUrl}`}
                          alt=""
                          className=""
                        />
                      </div>
                      <h2 className="productTitle text-[#003380] text-sm font-semibold py-6 text-left">
                        {item.name}
                      </h2>
                      <div className="flex flex-col gap-1 items-start">
                        <p className="text-sm text-gray-500">
                          Deal Price:{" "}
                          <span className="text-black font-bold">
                            ₹{item?.sellingPrice}.00
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          M.R.P:{" "}
                          <span className="line-through">₹{item?.mrp}.00</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          You Save: {item?.discount}
                        </p>
                        {item?.hasPP ? (
                          <>
                            <button className="text-green-600 text-xs rounded-3xl border border-green-600 px-1">
                              OFFERS AVAILABLE
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductSlider;
