import heroImage from "../../assets/hero.png";
import ServicesSection from "./ServicesSection";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-5"></div>{" "}
      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10 text-white flex items-start md:items-center">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Construction solution for everyone
          </h1>
          <p className="mt-4 text-xl lg:text-2xl">
            In id sem non bibendum pretium sit amet non nunc. Vivamus volutpat
            venenatis vehicula.
          </p>
          <button className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 transition rounded text-white font-semibold text-xl lg:text-2xl">
            Learn more
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-200px] left-[450px] right-0 z-20 hidden lg:block">
        <ServicesSection />
      </div>
    </section>
  );
};

export default HeroSection;
