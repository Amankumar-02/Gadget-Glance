import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import "./ProductSlider.css";
import {ProductCard} from '../index';

function ProductSlider({ productSlideData }) {
  const {name, viewAllUrl, data } = productSlideData;
  return (
    <>
      {/* {!productData ? null : (
        <> */}
          <div className="py-8 px-10">
            <div className="flex">
              <h1 className="me-4 font-semibold">{name}</h1>
              <a href={viewAllUrl} target="_blank">
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
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard items={item}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
    //   )}
    // </>
  );
}

export default ProductSlider;
