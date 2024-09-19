const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-md mx-auto ">
          <h2 className="text-3xl font-bold text-[#00215B] mb-6">
            We bouwen en beheren plaatsen en infrastructuren
          </h2>

          <div className="space-y-4">
            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                <i className="fas fa-paint-roller"></i>{" "}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  Pleisterwerkdiensten
                </h3>
                <p className="text-gray-600">
                  Wij bieden een gladde, moderne afwerking voor uw muren en
                  plafonds. Kasteel Bouw transformeert uw droomruimtes met
                  professionele pleisteroplossingen.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                <i className="fas fa-palette"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  Decoratief pleisterwerk
                </h3>
                <p className="text-gray-600">
                  De beste manier om uw ruimtes te personaliseren! Met onze
                  decoratieve pleisterdiensten brengen we unieke texturen en
                  ontwerpen op uw muren.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                <i className="fas fa-hammer"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  Restauratie en renovatie
                </h3>
                <p className="text-gray-600">
                  Het is ons werk om uw oude gebouwen weer als nieuw te maken!
                  Ons deskundige team herstelt en behoudt historische
                  pleisterlagen en brengt uw gebouwen weer tot leven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
