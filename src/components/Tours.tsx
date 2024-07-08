import React from "react";
import TourSlider from "./Slides/TourSlider";

const Tours = () => {
  return (
    <section id="tours" className="pt-28">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        Популярные пакеты
        <img
          src="/lines/line1.svg"
          alt="line"
          className="absolute left-0 -bottom-1"
        />
      </h2>

      <h6 className="text-center mt-2 text-neutral">Выберите ваш тур</h6>

      <div className="w-[1550px] mx-auto mt-8 pl-4">
        <TourSlider />
      </div>
    </section>
  );
};

export default Tours;
