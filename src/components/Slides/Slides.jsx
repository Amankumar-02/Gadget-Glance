import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slides.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slides({data}) {
    const liveCarousel = data?.data?.Section4[0]?.data;
  return (
    <>
      {!liveCarousel ? null : (
        <>
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
              {liveCarousel.map((item, index) => (
                <SwiperSlide key={index}>
                    <a href={item.url} target='_blank'>
                    <img
                        src={`https://www.reliancedigital.in/${item?.imageUrl}`}
                        alt={`https://www.reliancedigital.in/${item?.alternateImageUrl}`}
                    />
                    </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}

export default Slides