import { useState, useEffect } from "react";
import projectImage1 from "../../assets/1.png";
import projectVideo2 from "../../assets/2.mp4";
import projectVideo3 from "../../assets/3.mp4";
import projectVideo1 from "../../assets/4.mp4";
import projectVideo2b from "../../assets/5.mp4";
import projectImage2 from "../../assets/project-1.png";
import projectImage3 from "../../assets/project-2.jpg";
import projectImage4 from "../../assets/project-3.jpg";
import projectImage5 from "../../assets/project-4.jpg";

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-red-600 text-xs sm:text-sm font-semibold uppercase mb-2 text-center">
          Onze Werken
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#00215B] mb-8 text-center">
          Onze Speciale Projecten
        </h2>

        <div
          className={`grid gap-4 ${
            isMobile ? "grid-cols-2" : "grid-cols-3 grid-rows-2"
          }`}
        >
          {!isMobile && (
            <div className="relative group row-span-2">
              <img
                src={projectImage1}
                alt="Project 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    Gevelrenovatie
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                    Gevelbekleding en pleisterwerk, isolatie en esthetische
                    afwerkingen
                  </p>
                </div>
              </div>
            </div>
          )}

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
                  Binnenhuisrenovatie
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Vernieuwde muren, pleisterwerk en plankensystemen
                </p>
              </div>
            </div>
          </div>

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
                  Muurpleister en Egaliseren
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Pleisterwerk binnen en buiten, gladde oppervlakken en
                  decoratieve pleistertoepassingen
                </p>
              </div>
            </div>
          </div>

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
                  Bouw- en Structuurwerken
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Structurele muurwerken en renovaties
                </p>
              </div>
            </div>
          </div>

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
                  Decoratieve Pleistertoepassingen
                </h3>
                <p className="text-sm sm:text-base md:text-lg hidden lg:block">
                  Gedetailleerd vakmanschap en unieke oppervlaktedesigns in
                  pleisterwerk
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
