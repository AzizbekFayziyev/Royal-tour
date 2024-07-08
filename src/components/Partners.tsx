import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="my-20">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
      Наши партнеры
        <img
          src="/lines/line4.svg"
          alt="line"
          className="absolute right-0 -bottom-2"
        />
      </h2>

      <div className="wrapper">
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-lightBlue py-5 px-10 rounded-2xl gird place-content-center">
            <Image
              src="/partners/1.png"
              alt="partner image"
              width={160}
              height={100}
            />
          </div>

          <div className="bg-lightBlue py-5 px-10 rounded-2xl gird place-content-center">
            <Image
              src="/partners/2.png"
              alt="partner image"
              width={160}
              height={100}
            />
          </div>

          <div className="bg-lightBlue py-5 px-10 rounded-2xl gird place-content-center">
            <Image
              src="/partners/3.png"
              alt="partner image"
              width={160}
              height={100}
            />
          </div>

          <div className="bg-lightBlue py-5 px-10 rounded-2xl gird place-content-center">
            <Image
              src="/partners/4.png"
              alt="partner image"
              width={160}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
