"use client";
import { NavLinks } from "@/constants";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full z-50">
        <nav className="navbar wrapper">
          <button onClick={toggleMenu} className="navbar-start lg:hidden">
            {isMenuOpen ? (
              <X color="#142657" size={30} />
            ) : (
              <Menu color="#142657" size={30} />
            )}
          </button>

          <div className="navbar-start mr-4 lg:mr-0">
            <Image
              className="min-w-[180px]"
              src="/logo.png"
              alt="royal tour logo"
              width={200}
              height={200}
            />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 px-1">
              {NavLinks.map((link, id) => (
                <li key={id}>
                  <Link
                    className="text-lg hover:text-primary  transition-colors"
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link href="tel:+998991127272" className="sm:btn sm:btn-primary">
              <PhoneCall
                className="block sm:hidden"
                fill="#2985ff"
                color="#2985ff"
                size={24}
              />

              <span className="sm:block hidden">
                <PhoneCall fill="#fff" size={20} />
              </span>

              <span className="hidden sm:block">+998 99 112 72 72</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}

      <nav
        className={`${
          isMenuOpen
            ? "opacity-100 -translate-x-0 z-40 pointer-events-auto"
            : "opacity-0 -z-10 pointer-events-none -translate-x-44"
        } fixed w-[80%] h-full bg-neutral text-white p-5 flex flex-col justify-between transition-all`}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {NavLinks.map((link, id) => (
            <li onClick={toggleMenu} key={id}>
              <Link
                className="text-lg hover:text-primary  transition-colors"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <nav>
            <h6 className="text-lg mb-4 font-bold">Контакты</h6>

            <li className="list-none text-base flex gap-2 items-center my-1 -ml-3">
               <PhoneCall color="#2985ff" /> +998 99 112 72 72
            </li>

            <li className="list-none text-base flex gap-2 items-center my-4">
              <Mail color="#2985ff" /> mirgiyosmac@gmail.com
            </li>

            <li className="list-none text-base flex gap-2 items-center my-1">
              <MapPin color="#2985ff" /> Markул. Путешествий, д. 1, <br /> офис
              10, Ташкентeting
            </li>
          </nav>
          <nav className="mt-8">
            <h6 className="text-lg mb-4 font-bold">Соц. сети</h6>

            <div className="flex items-center gap-4">
              <Link href="#">
                <InstagramIcon size={28} color="#2985ff" />
              </Link>

              <Link href="#">
                <Send size={28} color="#2985ff" />
              </Link>

              <Link href="#">
                <FacebookIcon size={28} color="#2985ff" />
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
