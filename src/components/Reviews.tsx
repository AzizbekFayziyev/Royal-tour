import React from "react";
import ReviewsSlider from "./Slides/ReviewsSlider";

const Reviews = () => {
  return (
    <section id="reviews">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
      Отзывы
        <img
          src="/lines/line3.svg"
          alt="line"
          className="absolute left-0 -bottom-2"
        />
      </h2>

      <div className="w-[1550px] mx-auto mt-8 pl-2">
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Reviews;
