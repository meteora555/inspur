import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper';

import 'swiper/css';

function Slider() {
  return (
    <div>
      <Swiper
        // modules={[EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination

        // loop: true,
        // slidesPerView: 1,
        // spaceBetween: 30,
        // fadeEffect: {
        //     crossFade: true,
        // }
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
