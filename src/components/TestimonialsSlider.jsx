import React from "react";

import { testimonialsData } from "../data";

// компоненты слайдера
import { Swiper, SwiperSlide } from "swiper/react";
// стили слайдера
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination } from "swiper";

const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[30px] pl-[40px] xl:px-[70px] pb-[30px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* users Avatar */}
            <img src={image} alt="" />

            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold test-accent-primary">
                {web}
              </div>
              <p className="max-w-[300px]">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsSlider;
