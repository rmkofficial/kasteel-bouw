import { useState } from "react";
import serviceImage1 from "../../assets/service.png";
import serviceImage2 from "../../assets/service.png";
import serviceImage3 from "../../assets/service.png";
import serviceImage4 from "../../assets/service.png";

const ServicesComponent = () => {
  // Hangi kartın açık olduğunu kontrol eden state
  const [openCard, setOpenCard] = useState(0);

  // Kart genişliği kontrolü ve opacity ayarı 
  const isCardOpen = (index) => {
    return openCard === index
      ? "md:w-1/2 w-full opacity-100"
      : "md:w-1/6 w-full opacity-50";
  };

  return (
    <section className="py-16 mt-48">
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
              Research & Analysis
            </h3>
            {openCard === 0 && (
              <div className="mt-4 text-white">
                <p>
                  Nullam tincidunt libero ac augue eleifend, vitae condimentum
                  lacus.
                </p>
                <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded">
                  →
                </button>
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
              Industry Development
            </h3>
            {openCard === 1 && (
              <div className="mt-4 text-white">
                <p>
                  Fusce id hendrerit lectus. Morbi vitae tortor sed turpis
                  feugiat.
                </p>
                <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded">
                  →
                </button>
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
              Production Launch
            </h3>
            {openCard === 2 && (
              <div className="mt-4 text-white">
                <p>
                  Nullam tincidunt libero ac augue eleifend, vitae condimentum
                  lacus.
                </p>
                <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded">
                  →
                </button>
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
              Quality Assurance
            </h3>
            {openCard === 3 && (
              <div className="mt-4 text-white">
                <p>Vestibulum eget odio sit amet elit consequat imperdiet.</p>
                <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded">
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
