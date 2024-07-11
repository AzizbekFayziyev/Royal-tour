"use client";
import React, { FormEvent, useState } from "react";
import sendMessageToTelegram from "@/services/telegramService";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await sendMessageToTelegram(
        `Заявка: Royal Tour \n\n Ф.И.О: ${name} \n Номер телефона: ${tel} \n Сообщение: ${message}`
      );

      alert("Заявка успешно отправлено!");
      setName("");
      setTel("");
      setMessage("");
    } catch (error) {
      alert("!!!Не удалось отправить сообщение!!!");
    }
  };

  return (
    <section id="contact" className="mt-20">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        Оставить заявку
        <img
          src="/lines/line6.svg"
          alt="line"
          className="absolute right-0 -bottom-2"
        />
      </h2>

      <div className="wrapper">
        <form
          onSubmit={handleSendMessage}
          className="mt-8 flex flex-col gap-6 max-w-[600px] mx-auto"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Ф.И.О"
            className="input bg-lightBlue p-5 py-6 rounded-3xl text-neutral placeholder:text-light w-full"
            required
          />

          <input
            onChange={(e) => setTel(e.target.value)}
            value={tel}
            type="tel"
            placeholder="Номер телефона"
            className="input bg-lightBlue p-5 py-6 rounded-3xl text-neutral placeholder:text-light w-full"
            required
          />

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="textarea bg-lightBlue p-5 py-6 rounded-3xl text-neutral placeholder:text-light resize-none"
            placeholder="Ваше сообщение"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary w-full text-base font-semibold"
          >
            Отправить заявку
          </button>
        </form>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.675535208477!2d69.29339197591571!3d41.337668371306236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef508e7cd1b1d%3A0x8a38901c797f91a3!2sRoyal%20Tour%20Tashkent!5e0!3m2!1sen!2s!4v1720374624873!5m2!1sen!2s"
        className="border-none mt-20 w-full hidden sm:block h-[300px] lg:h-[455px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactForm;
