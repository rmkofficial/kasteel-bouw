import heroImage from "../../assets/hero-min.png";
import ServicesSection from "./ServicesSection";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] sm:h-[50vh] md:h-[75vh] lg:h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-5"></div>{" "}
      <div className="container mx-auto px-4 py-16 md:py-72 relative z-10 text-white flex flex-col justify-start h-screen pt-72">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Sıva ustalığı ve kalitesi için güvenilir ortağınız!
          </h1>
          <p className="mt-4 text-xl lg:text-2xl">
            Kasteel Bouw olarak, 15 yılı aşkın deneyimimizle kaliteli sıva
            hizmetleri sunuyoruz.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[-200px] left-[450px] right-0 z-20 hidden lg:block">
        <ServicesSection />
      </div>
    </section>
  );
};

export default HeroSection;
