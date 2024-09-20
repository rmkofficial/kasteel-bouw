import { useState } from "react";
import serviceImage1 from "../../assets/service.jpg";
import serviceImage2 from "../../assets/service2.jpg";
import serviceImage3 from "../../assets/service3.jpg";
import serviceImage4 from "../../assets/service4.jpg";

const ServicesComponent = () => {
  const [openCard, setOpenCard] = useState(0);

  const isCardOpen = (index) => {
    return openCard === index
      ? "w-full md:w-1/2 opacity-100"
      : "w-full md:w-1/6 opacity-50";
  };

  return (
    <section className="py-24 hidden md:block">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        {/* Service 1 */}
        <div
          className={`relative h-96 bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${isCardOpen(
            0
          )}`}
          style={{ backgroundImage: `url(${serviceImage1})` }}
          onClick={() => setOpenCard(openCard === 0 ? null : 0)}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              Ervaring en Vertrouwen
            </h3>
            {openCard === 0 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Bij Kasteel Bouw zijn we al meer dan 15 jaar toonaangevend in
                  bouw- en pleisterprojecten. Met ons betrouwbare en ervaren
                  team leveren we uw projecten af volgens de hoogste normen.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Service 2 */}
        <div
          className={`relative h-96 bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${isCardOpen(
            1
          )}`}
          style={{ backgroundImage: `url(${serviceImage2})` }}
          onClick={() => setOpenCard(openCard === 1 ? null : 1)}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              Expertise en Kwaliteit
            </h3>
            {openCard === 1 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Ons team van pleisterexperts levert hoogwaardige resultaten
                  door aandacht te besteden aan elk detail in elk project. We
                  stellen klanttevredenheid altijd voorop.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Service 3 */}
        <div
          className={`relative h-96 bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${isCardOpen(
            2
          )}`}
          style={{ backgroundImage: `url(${serviceImage3})` }}
          onClick={() => setOpenCard(openCard === 2 ? null : 2)}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              Innovatieve Oplossingen
            </h3>
            {openCard === 2 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Kasteel Bouw biedt op maat gemaakte en innovatieve
                  pleisteroplossingen die zijn afgestemd op de behoeften van
                  onze klanten. We staan klaar met diensten die u een stap
                  vooruit helpen.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Service 4 */}
        <div
          className={`relative h-96 bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${isCardOpen(
            3
          )}`}
          style={{ backgroundImage: `url(${serviceImage4})` }}
          onClick={() => setOpenCard(openCard === 3 ? null : 3)}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              Tijdige Levering
            </h3>
            {openCard === 3 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  We streven ernaar om uw projecten op tijd en binnen budget te
                  voltooien, terwijl we uw verwachtingen overtreffen. Kwaliteit
                  en snelheid zijn onze prioriteit.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
