import { CalendarDays, Clock3, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FireTours = () => {
  return (
    <section className="mt-8 sm:mt-28">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        🔥 Горящие туры
        <img
          src="/lines/line3.svg"
          alt="line"
          className="absolute left-10 -bottom-2"
        />
      </h2>

      <div className="wrapper mt-8">
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3, 4].map((e) => (
            <div
              key={e}
              className="overflow-hidden rounded-2xl bg-white w-full sm:max-w-[290px]"
            >
              <Image
                className="w-full"
                src="/tour.png"
                width={290}
                height={195}
                alt="tour image"
              />

              <div className="p-4">
                <h4 className="text-neutral text-2xl font-bold mb-4">
                  Тур Каппадокия
                </h4>

                <div className="flex items-center gap-4">
                  <div className="bg-lightBlue inline-block p-2 rounded-full">
                    <Clock3 size={28} color="#2985ff" />
                  </div>

                  <div>
                    <span className="text-light">Длительность</span>
                    <h6 className="text-neutral font-bold">8 дней / 7 ночей</h6>
                  </div>
                </div>

                <div className="flex items-center gap-4 my-4">
                  <div className="bg-lightBlue inline-block p-2 rounded-full">
                    <CalendarDays size={28} color="#2985ff" />
                  </div>

                  <div>
                    <span className="text-light">Период</span>
                    <h6 className="text-neutral font-bold">
                      15.07.24 - 25.07.24
                    </h6>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-lightBlue inline-block p-2 rounded-full">
                    <Utensils size={28} color="#2985ff" />
                  </div>

                  <div>
                    <span className="text-light">Питание</span>
                    <h6 className="text-neutral font-bold">Завтраки</h6>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="#contact">
                    <button className="btn border-none bg-lightBlue hover:bg-lightBlue2 text-primary w-full font-semibold text-base">
                      от 13 000 000 сум/чел
                    </button>
                  </Link>

                  <Link href="#contact">
                    <button className="btn btn-primary w-full font-semibold text-base mt-3">
                      Забронировать
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireTours;
