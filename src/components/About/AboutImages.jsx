import aboutImage1 from "../../assets/about-1.png";
import aboutImage2 from "../../assets/IMG_1689.png";

const AboutImages = () => {
  return (
    <div className="relative flex flex-col items-center lg:items-start mt-10 lg:mt-60 lg:order-1 pb-28">
      <div className="bg-white shadow-lg p-2 mb-4 md:absolute md:top-[50px] lg:top-[-200px] md:right-16 lg:right-44 rounded-lg">
        <img
          src={aboutImage1}
          alt="Construction"
          className="w-full lg:w-[380px] md:w-[260px] h-auto object-cover rounded-lg"
        />
      </div>
      <div className="hidden md:block lg:absolute lg:top-[-50px] md:top-[10px] md:left-[-80px] lg:left-28 bg-white shadow-lg p-2 rounded-lg">
        <img
          src={aboutImage2}
          alt="Construction"
          className="w-full lg:w-[250px] md:w-[200px] h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutImages;
