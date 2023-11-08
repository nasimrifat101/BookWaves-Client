// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/swiper.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import img1 from '../../../Assets/a (6).png'
import img2 from '../../../Assets/a (7).png'
import img3 from '../../../Assets/a (8).png'
import img4 from '../../../Assets/a (9).png'
import img5 from '../../../Assets/Fiction1 (3).png'
import img6 from '../../../Assets/Fiction1 (5).png'
import img7 from '../../../Assets/novel (4).png'
import img8 from '../../../Assets/novel.png'


const SwiperBanner = () => {

  return (
    <div className="container">
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
      
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
      
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
      
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
