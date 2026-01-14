import { motion } from "framer-motion";
import "../styles/about.css"; // optional (ඔයාට already css file එකක් තියේ නම් එකම use කරන්න)

export default function About() {
  return (
    <section className="section" id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="section-text"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
      >
        I’m Chalana Wijesingha. I create modern, responsive websites and full-stack
        systems using React and Java. I focus on clean UI, smooth user experience,
        and building systems that solve real business problems.
      </motion.p>

      {/* ✅ Optional: Mini Stats Cards */}
      <motion.div
        className="about-stats"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
      >
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>10+</h3>
          <p>Projects Built</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>React</h3>
          <p>Frontend Focus</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Java</h3>
          <p>Backend Systems</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
