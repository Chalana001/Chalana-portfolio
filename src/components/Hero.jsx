import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Chalana Wijesingha</span>
        </h1>

        <p className="hero-title">
          Web Application Builder | React + Java
        </p>

        <p className="hero-desc">
          I build modern websites and full-stack web applications with clean UI,
          strong performance, and professional deployment.
        </p>

        <div className="hero-buttons">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-social">
          <a target="_blank" href="https://github.com/Chalana001">
            <FaGithub />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/chalana-wijesingha">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}
