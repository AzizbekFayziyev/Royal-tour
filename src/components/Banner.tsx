import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="wrapper">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between text-white text-center lg:text-left">
          <div className="max-w-[680px] py-10 sm:px-10">
            <h3 className="text-3xl font-bold">НЕ НАШЛИ ТУР ПОДХОДЯЩИЙ ВАМ?</h3>

            <p className="my-6">
              Мы с радостью составим для Вас тур любой сложности. Вам лишь нужно
              позвонить к нам по номеру +99899 112 72 72 или заполните форму
            </p>

            <button className="btn btn-secondary px-6 text-base text-neutral">
              Оставить заявку
            </button>
          </div>

          <Image
            className="lg:mt-6"
            src="/bannerHero.png"
            alt="banner image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
