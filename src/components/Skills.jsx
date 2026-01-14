import "../styles/skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React",
    "Spring Boot",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "GitHub",
    "Vercel",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="skill"
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
