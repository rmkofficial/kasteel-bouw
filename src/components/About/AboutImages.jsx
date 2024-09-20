import aboutImage1 from "../../assets/about-1.jpg";
import aboutImage2 from "../../assets/about-2.png";

const AboutImages = () => {
  return (
    <div className="relative flex flex-col items-center lg:items-start mt-10 lg:mt-60 lg:order-1 pb-28">
      <div className="bg-gray-100 shadow-lg p-0 mb-4 md:absolute md:top-[50px] lg:top-[-200px] md:right-16 lg:right-44 rounded-lg">
        <img
          src={aboutImage1}
          srcSet={`${aboutImage1} 480w, ${aboutImage1} 800w, ${aboutImage1} 1200w`}
          sizes="(max-width: 768px) 480px, (max-width: 1200px) 800px, 1200px"
          alt="Pleisterwerk op de bouwplaats"
          className="w-full lg:w-[880px] md:w-[260px] h-auto object-cover rounded-lg"
          loading="lazy"
          width="880"
          height="600"
        />
      </div>
      <div className="hidden md:block lg:absolute lg:top-[-50px] md:top-[10px] md:left-[-80px] lg:left-72 bg-white shadow-lg p-0 rounded-lg">
        <img
          src={aboutImage2}
          srcSet={`${aboutImage2} 480w, ${aboutImage2} 800w, ${aboutImage2} 1200w`}
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 250px"
          alt="Afwerking van muren"
          className="w-full lg:w-[250px] md:w-[200px] h-auto object-cover rounded-lg"
          loading="lazy"
          width="250"
          height="350"
        />
      </div>
    </div>
  );
};

export default AboutImages;
