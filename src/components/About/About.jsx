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
            Over ons
          </h4>
          <h2 className="text-4xl font-bold mb-4">
            Wij garanderen succes met onze expertise
          </h2>
          <p className="text-lg mb-2">
            Bij Kasteel Bouw leveren we met meer dan 15 jaar ervaring en
            expertise de hoogste kwaliteit in bouw- en pleisterprojecten. Ons
            team zet zich in om elk project op tijd en perfect af te ronden.
          </p>
          <p className="text-gray-600 mb-6">
            In onze projecten staat klanttevredenheid altijd voorop en behalen
            we succesvolle resultaten dankzij onze aandacht voor details. Met
            vakmanschap en zorgvuldige planning zijn we hier om uw dromen
            werkelijkheid te maken.
          </p>
        </div>

        <div className="hidden lg:block">
          <AboutImages />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
