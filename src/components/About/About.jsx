import aboutImage1 from "../../assets/about-1.png";
import aboutImage2 from "../../assets/about-2.png";

const AboutSection = () => {
  return (
    <section id="aboutSection" className="mt-8 md:mt-12 lg:py-16 lg:mt-28 lg:mb-28 bg-white">
      <div className="container mx-auto lg:mb-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="lg:order-2 text-center lg:text-left text-[#00215B]">
          <h4 className="text-red-600 text-sm font-semibold uppercase mb-2">
            About Us
          </h4>
          <h2 className="text-4xl font-bold mb-4">
            With our knowledge we guarantee success
          </h2>
          <p className="text-lg mb-2">
            Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            congue
          </p>
          <p className="text-gray-600 mb-6">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque.
          </p>
          <button className="w-full lg:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
            Learn more →
          </button>
        </div>

        <div className="relative flex flex-col items-center lg:items-start mt-10 lg:mt-60 lg:order-1">
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
      </div>
    </section>
  );
};

export default AboutSection;
