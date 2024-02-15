import { IMG_URL } from '../../utils/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slides.css';
import { Link } from 'react-router-dom';

function Slides({liveCarousalData}) {
    const liveCarousel = liveCarousalData;
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
              {liveCarousel.map(({url, imageUrl, name}, index) => (
                <SwiperSlide key={index}>
                    {/* <a href={url} target='_blank'> */}
                    <Link to={`/search/${url.split('campaign=')[1].split('&')[0].replaceAll("_", " ").replaceAll("&", "and").replaceAll("-", " ")}`}>
                      <img
                        src={IMG_URL + imageUrl}
                        alt=""
                      />
                    </Link>
                    {/* </a> */}
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