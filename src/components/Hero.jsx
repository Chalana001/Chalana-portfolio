import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/hero.css";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <header className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1 variants={item}>
          Hi, I’m <span>Chalana Wijesingha</span>
        </motion.h1>

        {/* Title */}
        <motion.p className="hero-title" variants={item}>
          Web Application Builder | React + Java
        </motion.p>

        {/* Description */}
        <motion.p className="hero-desc" variants={item}>
          I build modern websites and full-stack web applications with clean UI,
          strong performance, and professional deployment.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero-buttons" variants={item}>
          <motion.a
            className="btn primary"
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>

          <motion.a
            className="btn"
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            className="btn"
            href="/Chalana-CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social */}
        <motion.div className="hero-social" variants={item}>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Chalana001"
            whileHover={{ y: -4, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/chalana-wijesingha"
            whileHover={{ y: -4, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}
