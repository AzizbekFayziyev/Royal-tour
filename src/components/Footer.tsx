import {
  FacebookIcon,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral mt-20 sm:mt-0">
      <div className="wrapper">
        <footer className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-72 text-white p-10 py-20">
          <aside>
            <Image
              src="/logo-light.png"
              alt="royal tour logo"
              width={200}
              height={200}
            />

            <p className="mt-12 text-gray-400">
              © 2024 «Royal Tour».
              <br />
              Все права защищены
            </p>
          </aside>

          <div className="flex flex-wrap gap-10 sm:gap-20">
            <nav>
              <h6 className="text-lg mb-4 font-bold">Контакты</h6>

              <li className="list-none text-base flex gap-2 items-center my-1 -ml-3">
                 <PhoneCall color="#2985ff" /> +998 99 112 72 72
              </li>

              <li className="list-none text-base flex gap-2 items-center my-4">
                <Mail color="#2985ff" /> mirgiyosmac@gmail.com
              </li>

              <li className="list-none text-base flex gap-2 items-center my-1">
                <MapPin color="#2985ff" /> Markул. Путешествий, д. 1, <br />{" "}
                офис 10, Ташкентeting
              </li>
            </nav>
            <nav>
              <h6 className="text-lg mb-4 font-bold">Соц. сети</h6>

              <div className="flex items-center gap-4">
                <Link href="#">
                  <Instagram size={28} color="#2985ff" />
                </Link>

                <Link href="#">
                  <Send size={28} color="#2985ff" />
                </Link>

                <Link href="#">
                  <FacebookIcon size={28} color="#2985ff" />
                </Link>
              </div>
            </nav>
            <nav>
              <h6 className="text-lg mb-4 font-bold">Соц. сети</h6>

              <div className="flex items-center gap-4">
                <Link href="#">
                  <Image
                    src="/payment/humo.png"
                    alt="humo"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/payment/uzcard.png"
                    alt="humo"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/payment/click.png"
                    alt="humo"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/payment/payme.png"
                    alt="humo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
