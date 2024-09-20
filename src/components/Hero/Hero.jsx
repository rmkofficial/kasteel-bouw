import { lazy, Suspense } from "react";
import heroImage from "../../assets/hero-min.jpg";
const ServicesSection = lazy(() => import("./ServicesSection"));

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] sm:h-[50vh] md:h-[75vh] lg:h-screen flex items-center"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="container mx-auto px-4 py-16 lg:pt-20 md:py-72 relative z-10 text-white flex flex-col justify-start h-screen pt-72">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Uw betrouwbare partner voor pleisterwerk en kwaliteit!
          </h1>
          <p className="mt-4 text-xl lg:text-2xl">
            Bij Kasteel Bouw bieden we kwalitatieve pleisterwerkdiensten met
            meer dan 15 jaar ervaring.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[-200px] left-[450px] right-0 z-20 hidden lg:block">
        <Suspense fallback={<div>Loading...</div>}>
          <ServicesSection />
        </Suspense>
      </div>
    </section>
  );
};

export default HeroSection;
