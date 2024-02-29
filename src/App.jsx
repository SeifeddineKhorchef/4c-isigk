// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import WelcomePage from "./components/WelcomePage";
import Gallery from "./components/Gallery";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <AboutUs/>
      <Hero />
      <Team/>
      <Service />
       <Gallery/>
      <Projects />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Seifeddine khorchef</h6>
        <p>seifeddine khorchef © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
