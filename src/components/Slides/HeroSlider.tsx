"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);
  const mediaSm = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = { swiper };
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: !mediaSm ? 35 : -25,
          depth: 100,
          modifier: 5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      >
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <SwiperSlide key={e}>
            <img src={`/heroSlides/${e}.png`} alt="slider image" />

            <div className="absolute bg-primary/50 bottom-6 font-bold text-2xl left-0 w-full p-4">АНТАЛИЯ</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div>
          <button className="bg-primary rounded-full p-1 mr-2" ref={prevRef}>
            <ChevronLeft size={25} />
          </button>
          <button className="bg-primary rounded-full p-1" ref={nextRef}>
            <ChevronRight size={25} />
          </button>
      </div> */}
    </>
  );
};

export default HeroSlider;
