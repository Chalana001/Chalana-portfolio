import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tech from "./components/Tech";

import "./styles/global.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
