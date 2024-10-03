import { IMG_URL } from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Slides.css";
import { Link } from "react-router-dom";

function Slides({ liveCarousalData }) {
  const liveCarousel = liveCarousalData;
  return (
    <>
      {!liveCarousel ? null : (
        <>
          {liveCarousel.length > 1 ? (
            <>
              <div className="w-full">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  // pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {liveCarousel.map(({ url, imageUrl, name }, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        to={`search/${name
                          .toLowerCase()
                          .replaceAll("%", " ")
                          .replaceAll("|", " ")
                          .replaceAll("/", " ")
                          .replaceAll("&", "and")}`}
                      >
                        <img
                          src={IMG_URL + imageUrl}
                          alt=""
                          className="w-full"
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <Swiper
                  spaceBetween={30}
                  loop={false}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  // pagination={{
                  //   clickable: false,
                  // }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {liveCarousel.map(({ url, imageUrl, name }, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        to={`search/${name
                          .toLowerCase()
                          .replaceAll("%", " ")
                          .replaceAll("|", " ")
                          .replaceAll("/", " ")
                          .replaceAll("&", "and")}`}
                      >
                        <img
                          src={IMG_URL + imageUrl}
                          alt=""
                          className="w-full"
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Slides;
