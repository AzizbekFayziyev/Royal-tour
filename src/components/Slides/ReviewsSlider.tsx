"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { reviewCards } from "@/constants";

export default function ReviewsSlider() {
  const mediaSm = useMediaQuery({
    query: "(min-width: 640px)",
  });

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={!mediaSm ? -800 : -30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        freeMode={true}
        pagination={false}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {reviewCards.map((review, id) => (
          <SwiperSlide key={id}>
            <div className="w-[355px] sm:w-[740px] bg-white text-neutral rounded-2xl py-6 px-8 flex flex-col items-center gap-4">
              <p className="text-center">{review.comment}</p>

              <div className="flex items-center gap-4 ">
                <Image
                  className="rounded-full w-[64px] h-[64px] border-2 border-primary object-cover"
                  src={review.authorPic}
                  alt={review.authorName}
                  width={64}
                  height={64}
                />
                <div>
                  <h6 className="font-bold">{review.authorName}</h6>
                  <span className="text-light text-sm">
                    {review.authorLocation}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
