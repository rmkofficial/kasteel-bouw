import projectImage1 from "../../assets/project-1.png";
import projectImage2 from "../../assets/project-2.png";
import projectImage3 from "../../assets/project-2.png";
import projectImage4 from "../../assets/project-2.png";
import projectImage5 from "../../assets/project-2.png";

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-red-600 text-sm font-semibold uppercase mb-2 text-center">
          Our Works
        </h4>
        <h2 className="text-4xl font-bold text-[#00215B] mb-8 text-center">
          Our Special Projects
        </h2>

        {/* Grid Yapısı */}
        <div
          className="grid grid-rows-2 grid-cols-3 gap-4"
          style={{
            gridTemplateAreas: `
                "project1 project2 project3"
                "project1 project4 project5"
              `,
          }}
        >
          {/* Proje 1 - 2 satırı kapsayan */}
          <div
            className="relative group row-span-2"
            style={{ gridArea: "project1" }}
          >
            <img
              src={projectImage1}
              alt="Project 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Commercial
                </h3>
                <p className="text-base md:text-lg">Benoit Architecture</p>
              </div>
            </div>
          </div>

          {/* Proje 2 */}
          <div className="relative group" style={{ gridArea: "project2" }}>
            <img
              src={projectImage2}
              alt="Project 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Infrastructure
                </h3>
                <p className="text-base md:text-lg">Modern Bridge</p>
              </div>
            </div>
          </div>

          {/* Proje 3 */}
          <div className="relative group" style={{ gridArea: "project3" }}>
            <img
              src={projectImage3}
              alt="Project 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Construction
                </h3>
                <p className="text-base md:text-lg">Skyscraper Build</p>
              </div>
            </div>
          </div>

          {/* Proje 4 */}
          <div className="relative group" style={{ gridArea: "project4" }}>
            <img
              src={projectImage4}
              alt="Project 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Industrial
                </h3>
                <p className="text-base md:text-lg">Factory</p>
              </div>
            </div>
          </div>

          {/* Proje 5 */}
          <div className="relative group" style={{ gridArea: "project5" }}>
            <img
              src={projectImage5}
              alt="Project 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
              <div className="text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Urban</h3>
                <p className="text-base md:text-lg">City Planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
