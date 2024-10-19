import React from "react";
import HeroSlider from "./Slides/HeroSlider";

const Header = () => {
  return (
    <header className="overflow-hidden">
      <div className="text-center text-white relative z-20">
        <div className="px-2 max-w-[840px] mx-auto w-full -mt-4 sm:mt-4">
          <h1 className="mt-28 mb-5 text-4xl sm:text-5xl font-bold">
          AZIZBEK FAYZIYEV !!!!{" "}
            <span className="text-secondary">становятся реальностью!</span>
          </h1>
          <p className="mb-10">
            Планируйте свои идеальные каникулы с нами — от романтических побегов
            до захватывающих приключений. Мы предлагаем уникальные туры, которые
            позволят вам окунуться в культуру и традиции самых красивых мест
            мира.
          </p>
        </div>

        <div>
          <HeroSlider />
        </div>
      </div>
    </header>
  );
};

export default Header;
