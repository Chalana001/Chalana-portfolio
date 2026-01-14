import "../styles/services.css";
import { motion } from "framer-motion";
import { FaGlobe, FaLayerGroup, FaTools } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Business / Shop Websites",
      desc: "Modern responsive websites for shops, services, and businesses.",
      icon: <FaGlobe />,
    },
    {
      title: "Full Stack Web Apps",
      desc: "Dashboard systems, management apps, and API connected projects.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Fix Bugs + Deploy",
      desc: "Bug fixing, optimization, and cloud deployment (Vercel/Firebase).",
      icon: <FaTools />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section" id="services">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
