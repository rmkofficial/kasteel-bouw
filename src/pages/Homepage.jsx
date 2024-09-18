import HeroSection from "../components/Hero/Hero";
import AboutSection from "../components/About/About";
import ServicesSection from "../components/Services/Services";
import ProjectsSection from "../components/Projects/Projects";
import ContactSection from "../components/Contact/Contact";

const Homepage = () => {
  return (
    <div id="top">
      <HeroSection />
      <section id="aboutSection">
        <AboutSection />
      </section>
      <section id="servicesSection">
        <ServicesSection />
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
