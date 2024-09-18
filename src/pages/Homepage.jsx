import HeroSection from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import ServicesSection from "../components/Services/Services";
import ProjectsSection from "../components/Projects/Projects";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
};

export default Homepage;
