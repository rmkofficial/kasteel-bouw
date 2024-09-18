import HeroSection from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import ServicesComponent from "../components/Services/Services";
import ProjectsSection from "../components/Projects/Projects";
import ContactSection from "../components/Contact/Contact";
import MobileCarousel from "../components/Services/MobileCarousel";

const Homepage = () => {
  return (
    <div id="top">
      <HeroSection />
      <section id="aboutSection">
        <AboutSection />
      </section>
      <section id="servicesSection">
        <ServicesComponent />
        <MobileCarousel />
      </section>
      <section id="projectsSection">
        <ProjectsSection />
      </section>
      <section id="contactSection">
        <ContactSection />
      </section>
    </div>
  );
};

export default Homepage;
