import { IMG_URL } from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function ExploreProducts({ exploreProductsData }) {
  const data = exploreProductsData;
  return (
    <>
      {!exploreProductsData ? null : (
        <>
          <div className="py-8 lg:py-16 px-2 lg:px-10">
            <h1 className="text-center text-lg lg:text-2xl font-bold">
            Explore Our Range Of Products
            </h1>
            <div className="pt-4 lg:pt-10">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  350: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
                className="mySwiper"
              >
                {data.map(({ url, img }, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-4">
                      <Link
                        to={`/`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="scale-[0.95] hover:scale-[1.02] transition w-full"
                        />
                      </Link>
                      <p className="text-center">{url}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex items-center justify-center pt-4 lg:pt-8">
              <Link
                to={`/search/${name
                  .toLowerCase()
                  .replaceAll("%", " ")
                  .replaceAll("|", " ")
                  .replaceAll("/", " ")
                  .replaceAll("&", "and")}`}
              >
                <button className="bg-[#003088] text-white text-sm px-4 py-2 rounded-3xl font-semibold">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ExploreProducts;
