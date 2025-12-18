import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSetion";
import AboutSection from "../components/portfolio/AboutSection";
import ServicesSection from "../components/portfolio/ServicesSection";
import ProjectSection from "../components/portfolio/ProjectSection"
import ContactSection from "../components/portfolio/ContactSection"
import Footer from "../components/portfolio/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection/>
      <Footer />
    </>
  );
}
