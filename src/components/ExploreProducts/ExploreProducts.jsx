import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ExploreProducts.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function ExploreProducts({data}) {
    const exploreSlideItems = data;
    console.log(data);
  return (
    <>
    {!exploreSlideItems? (null):(
        <>
        <div className='py-8 px-10'>
        <div><h1 className='text-center text-2xl font-bold'>{exploreSlideItems?.name}</h1></div>
        <div className='pt-10'>
        <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper px-[30px]"
              >
                {exploreSlideItems?.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div><img src={`https://www.reliancedigital.in/${item?.imageUrl}`} alt="" /></div>
                      <p>{item?.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
        <div className='flex items-center justify-center pt-8'>
          <button className='bg-[#003380] text-white text-sm px-4 py-2 rounded-3xl font-semibold'>View All</button>
        </div>
        </div>
        </>
    )}
    </>
  )
}

export default ExploreProducts