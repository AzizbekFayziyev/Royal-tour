import { BadgeDollarSign, Headset, User, Users } from "lucide-react";
import React from "react";

const Advantages = () => {
  return (
    <section id="advantages" className="mt-20 wrapper">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
      Наши преимущества
        <img
          src="/lines/line2.svg"
          alt="line"
          className="absolute right-0 -bottom-1"
        />
      </h2>

      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightBlue p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-lightBlue2 p-3 rounded-full">
              <User size={50} color="transparent" fill="#2985ff" />
            </div>
            <h5 className="font-bold text-neutral text-lg">
              Индивидуальный подход
            </h5>
          </div>
          <p className="mt-4 text-neutral text-sm">
            Мы предлагаем персонализированные туры, адаптированные к вашим
            предпочтениям и потребностям. Независимо от того, хотите ли вы
            романтический отдых, семейное приключение или экстремальные
            путешествия, мы создадим идеальный маршрут специально для вас.
          </p>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightYellow p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-lightYellow2 p-3 rounded-full">
              <Users size={50} color="#ffd785" />
            </div>
            <h5 className="font-bold text-neutral text-lg">
              Опытные <br /> гиды
            </h5>
          </div>
          <p className="mt-4 text-neutral text-sm">
            Наши гиды — это профессионалы с многолетним опытом и глубокими
            знаниями о различных туристических направлениях. Они обеспечат вам
            незабываемые экскурсии и помогут узнать все секреты и интересные
            факты о местах, которые вы посещаете.
          </p>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightBlue p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-lightBlue2 p-3 rounded-full">
              <Headset size={50} color="#2985ff" />
            </div>
            <h5 className="font-bold text-neutral text-lg">
              Полный спектр услуг
            </h5>
          </div>
          <p className="mt-4 text-neutral text-sm">
            Мы предлагаем полный комплекс услуг — от бронирования авиабилетов и
            отелей до оформления виз и страхования. Вам не нужно беспокоиться о
            деталях — мы позаботимся обо всем, чтобы ваш отдых был беззаботным и
            комфортным.
          </p>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightYellow p-5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-lightYellow2 p-3 rounded-full">
              <BadgeDollarSign size={50} color="#ffd785" />
            </div>
            <h5 className="font-bold text-neutral text-lg">
              Выгодные <br /> цены
            </h5>
          </div>
          <p className="mt-4 text-neutral text-sm">
            Мы сотрудничаем с лучшими туроператорами и отелями, что позволяет
            нам предлагать нашим клиентам выгодные цены и эксклюзивные скидки.
            Регулярные акции и специальные предложения делают путешествия еще
            более доступными и приятными.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
