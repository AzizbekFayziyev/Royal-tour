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
import { TourCards } from "@/constants";
import Link from "next/link";

export default function TourSlider() {
  const mediaSm = useMediaQuery({
    query: "(min-width: 640px)",
  });

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={!mediaSm ? -480 : -320}
        loop={true}
        freeMode={true}
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {TourCards.map((card, id) => (
          <SwiperSlide key={id}>
            <div className="w-[340px] sm:w-[390px] h-[390px] rounded-2xl relative p-4 flex flex-col items-center justify-end gap-4 overflow-hidden">
              <Image className="-z-10" src={card.img} alt={card.title} fill />

              <h4 className="text-3xl font-bold text-white">{card.title}</h4>

              <p className="text-white">
                <b className="text-secondary">{card.price}$</b> / {card.day}
              </p>

              <Link
                className="btn btn-primary w-full font-semibold text-lg"
                href="#contact"
              >
                Забронировать
              </Link>

              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 0.08) 12%, rgba(0, 0, 0, 0.16) 17%, rgba(0, 0, 0, 0.22) 21%, rgba(0, 0, 0, 0.32) 26%, rgba(0, 0, 0, 0.42) 32%, rgba(0, 0, 0, 0.52) 38%, rgba(0, 0, 0, 0.62) 47%, rgba(0, 0, 0, 0.72) 57%, rgba(0, 0, 0, 0.82) 65%)",
                }}
                className="absolute bottom-0 left-0 h-[50%] w-full bg-red-500 -z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
