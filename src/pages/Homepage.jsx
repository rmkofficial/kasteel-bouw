import HeroSection from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import ServicesSection from "../components/Services/Services";
import ProjectsSection from "../components/Projects/Projects";
import ContactSection from "../components/Contact/Contact";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
