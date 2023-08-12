import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div>
      <Swiper 
        style={{maxHeight:"100vh"}}
        spaceBetween={30}
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
        <SwiperSlide><img src="https://spongelle.com/cdn/shop/files/homepage_banner_desktop-1_2000x.png?v=1680277357" alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
    );
};

export default Banner;