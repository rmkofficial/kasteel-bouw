import { useState, useEffect } from "react";
import projectImage1 from "../../assets/IMG_1758-min.png";
import projectVideo2 from "../../assets/2.mp4";
import projectVideo3 from "../../assets/3.mp4";
import projectVideo1 from "../../assets/4.mp4"; // Proje 4 videosu
import projectVideo2b from "../../assets/5.mp4"; // Proje 5 videosu
import projectImage2 from "../../assets/project-2.png"; // Proje 2 için resim
import projectImage3 from "../../assets/project-2.png"; // Proje 3 için resim
import projectImage4 from "../../assets/project-2.png"; // Proje 4 için resim
import projectImage5 from "../../assets/project-2.png";// Proje 5 için resim

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px ve altındaki ekranlar mobil kabul ediliyor
    };

    handleResize(); // İlk render'da ekran genişliğini kontrol et
    window.addEventListener("resize", handleResize); // Ekran boyutu değiştiğinde kontrol et

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-red-600 text-xs sm:text-sm font-semibold uppercase mb-2 text-center">
          Our Works
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#00215B] mb-8 text-center">
          Our Special Projects
        </h2>

        {/* Grid Yapısı */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {/* Proje 1 - 2 satırı kapsayan */}
          <div className="relative group row-span-2">
            <img
              src={projectImage1}
              alt="Project 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  Dış Cephe Yenileme
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Dış cephe kaplama ve sıva işlemleri, bina yalıtımı ve estetik
                  dokunuşlar
                </p>
              </div>
            </div>
          </div>

          {/* Proje 2 - Video (mobilde resim) */}
          <div className="relative group aspect-[3/2]">
            {isMobile ? (
              <img
                src={projectImage2}
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={projectVideo2}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xs sm:text-xl md:text-2xl font-bold mb-2">
                  İç Mekan Düzenleme
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Yenilenen duvarlar, sıva uygulamaları ve raf sistemleri
                </p>
              </div>
            </div>
          </div>

          {/* Proje 3 - Video (mobilde resim) */}
          <div className="relative group aspect-[3/2]">
            {isMobile ? (
              <img
                src={projectImage3}
                alt="Project 3"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={projectVideo3}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xs sm:text-xl md:text-2xl font-bold mb-2">
                  Duvar Sıva ve Düzleme
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  İç ve dış mekanlarda duvar sıvası, düzgün yüzeyler oluşturma
                  ve dekoratif sıva uygulamaları
                </p>
              </div>
            </div>
          </div>

          {/* Proje 4 - Video (mobilde resim) */}
          <div className="relative group aspect-[3/2]">
            {isMobile ? (
              <img
                src={projectImage4}
                alt="Project 4"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={projectVideo1}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xs sm:text-xl md:text-2xl font-bold mb-2">
                  İnşaat ve Yapısal Çalışmalar
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Yapısal duvar çalışmaları ve inşaat yenilemeleri
                </p>
              </div>
            </div>
          </div>

          {/* Proje 5 - Video (mobilde resim) */}
          <div className="relative group aspect-[3/2]">
            {isMobile ? (
              <img
                src={projectImage5}
                alt="Project 5"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={projectVideo2b}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xs sm:text-xl md:text-2xl font-bold mb-2">
                  Dekoratif Sıva Uygulamaları
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Sıva uygulamalarında detaylı işçilik ve özel yüzey
                  tasarımları.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
