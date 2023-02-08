import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

function Slider() {
  return (
    <div className="swiper__wrapper">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ el: '.header__slide-pagginashion', type: 'fraction' }}
        navigation={{
          nextEl: '.mybtn__next',
          prevEl: '.mybtn__prev',
        }}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        className="header__slider"

        // loop: true,
        // slidesPerView: 1,
        // spaceBetween: 30,
        // fadeEffect: {
        //     crossFade: true,
        // }
      >
        <SwiperSlide>
          <div className="">
            <div className="header__slide-container">
              <div className="header__slide-title">Сомневаетесь в выборе магазина</div>
              <div className="header__slide-text">
                Наши консультанты готовы помочь вам с выбором
              </div>
              <a href="#call" className="header__slide-btn">
                Напишите нам
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="header__slide-container">
              <div className="header__slide-title">Сомневаетесь в выборе магазина</div>
              <div className="header__slide-text">
                Наши консультанты готовы помочь вам с выбором
              </div>
              <a href="#call" className="header__slide-btn">
                Напишите нам
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="header__slide-container">
              <div className="header__slide-title">Сомневаетесь в выборе магазина</div>
              <div className="header__slide-text">
                Наши консультанты готовы помочь вам с выбором
              </div>
              <a href="#call" className="header__slide-btn">
                Напишите нам
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="header__slide-container">
              <div className="header__slide-title">Сомневаетесь в выборе магазина</div>
              <div className="header__slide-text">
                Наши консультанты готовы помочь вам с выбором
              </div>
              <a href="#call" className="header__slide-btn">
                Напишите нам
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className="header__slide-nav">
          <div className="mybtn__prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"
              />
            </svg>
          </div>
          <div className="swiper-pagination header__slide-pagginashion"></div>
          <div className="mybtn__next">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
