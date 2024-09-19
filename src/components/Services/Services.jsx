import { useState } from "react";
import serviceImage1 from "../../assets/service.png";
import serviceImage2 from "../../assets/workers-6762542_1280.jpg";
import serviceImage3 from "../../assets/electrician-installer-with-tool-his-hands-working-with-cable-construction-site.jpg";
import serviceImage4 from "../../assets/bricklayer-worker-installing-brick-masonry-exterior-wall-with-trowel-putty-knife.jpg";

const ServicesComponent = () => {
  // Hangi kartın açık olduğunu kontrol eden state
  const [openCard, setOpenCard] = useState(0);

  // Kart genişliği kontrolü ve opacity ayarı
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
              Tecrübe ve Güven
            </h3>
            {openCard === 0 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Kasteel Bouw olarak 15 yılı aşkın süredir inşaat ve sıva
                  projelerinde lideriz. Güvenilir ve deneyimli ekibimizle
                  projelerinizi en yüksek standartlarda tamamlıyoruz.
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
              Uzmanlık ve Kalite
            </h3>
            {openCard === 1 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Sıva ustalığında uzmanlaşmış ekibimiz, her projede detaylara
                  önem vererek kaliteli sonuçlar sunar. Her zaman müşteri
                  memnuniyetini önceliklendiriyoruz
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
              Yenilikçi Çözümler
            </h3>
            {openCard === 2 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Kasteel Bouw, müşterilerinin ihtiyaçlarına göre
                  özelleştirilmiş ve yenilikçi sıva çözümleri sunar. Sizi bir
                  adım öne çıkaracak hizmetlerle yanınızdayız.
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
              Zamanında Teslimat
            </h3>
            {openCard === 3 && (
              <div className="mt-4 text-white text-2xl">
                <p>
                  Projelerinizi zamanında ve bütçe dahilinde tamamlayarak
                  beklentilerinizi aşmayı hedefliyoruz. Kalite ve hız bizim
                  önceliğimizdir.
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
