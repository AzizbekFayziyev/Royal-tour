import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mt-20">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        О нас
        <img
          src="/lines/line5.svg"
          alt="line"
          className="absolute left-0 -bottom-2"
        />
      </h2>

      <div className="mt-8 bg-neutral flex flex-wrap xl:flex-nowrap">
        <Image
          className="w-full min-h-[200px] xl:h-auto xl:max-w-[800px] object-cover"
          src="/headerBg.png"
          alt="royal tour image"
          width={960}
          height={480}
        />

        <div className="px-4 py-6 lg:px-8 lg:py-16">
          <p className="text-white xl:max-w-[570px]">
            <b>Компания Royaltour</b> — это команда профессионалов с многолетним
            опытом в организации туров по всему миру. Мы предлагаем
            персонализированные путешествия, адаптированные к вашим
            предпочтениям и потребностям. Наша миссия — сделать ваши мечты о
            путешествиях реальностью, обеспечивая высокий уровень сервиса и
            незабываемые впечатления. С Royaltour вы можете быть уверены в
            качестве и надежности вашего отдыха.
            <br /> <br />
            Мы сотрудничаем с лучшими туроператорами и отелями, что позволяет
            нам предлагать выгодные цены и эксклюзивные предложения. Наши
            опытные гиды и внимательный персонал всегда готовы помочь вам на
            каждом этапе вашего путешествия. Мы организуем всё — от бронирования
            авиабилетов до оформления виз и страховок, чтобы вы могли
            наслаждаться своим отпуском без забот. С Royaltour ваш отдых будет
            комфортным, безопасным и незабываемым.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
