import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import FireTours from "@/components/FireTours";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Tours from "@/components/Tours";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="bg-white z-10 relative sm:-mt-12 -mt-20">
        <img
          id="ellipseTop"
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-[-45px] w-[1900px] left-[50%] pointer-events-none"
          src="/ellipse.svg"
          alt="ellipse"
        />

        <Tours />
        <Advantages />

        <img
          id="ellipseBottom"
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute bottom-[-220px] left-[50%] w-[1900px] pointer-events-none"
          src="/ellipseBottom.svg"
          alt="ellipse"
        />
      </div>

      <div className="bg-lightBlue py-20 mt-20">
        <FireTours />
      </div>

      <Banner />

      <Partners />

      <div className="bg-lightBlue py-20 mt-20">
        <Reviews />
      </div>

      <About />

      <ContactForm />
    </main>
  );
}
