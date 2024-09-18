import AboutImages from "./AboutImages";

const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className="mt-8 md:mt-12 lg:py-16 lg:mt-28 lg:mb-28 bg-white"
    >
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
        </div>

        {/* AboutImages bileşeni sadece büyük ekranlarda (lg) görünür */}
        <div className="hidden lg:block">
          <AboutImages />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
