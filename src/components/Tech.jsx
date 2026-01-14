import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaJsSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/tech.css";

export default function Tech() {
  const tech = [
    { name: "React", icon: <SiReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  // ✅ Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="section tech-section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Tech I Use
      </motion.h2>

      <motion.div
        className="tech-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tech.map((t, i) => (
          <motion.div
            key={i}
            className="tech-card"
            title={t.name}
            variants={card}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="tech-icon"
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {t.icon}
            </motion.div>
            <p className="tech-name">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
