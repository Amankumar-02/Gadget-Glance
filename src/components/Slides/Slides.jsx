import { IMG_URL } from '../../utils/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slides.css';

function Slides({liveCarousalData}) {
    const liveCarousel = liveCarousalData;
  return (
    <>
      {/* {!liveCarousel ? null : (
        <> */}
          <div>
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {liveCarousel.map(({url, imageUrl}, index) => (
                <SwiperSlide key={index}>
                    <a href={url} target='_blank'>
                    <img
                        src={IMG_URL + imageUrl}
                        alt=""
                    />
                    </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        {/* </>
      )} */}
    </>
  );
}

export default Slides