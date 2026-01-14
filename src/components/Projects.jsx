import "../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FX Cloth Store Management System",
    desc: "Full system to manage products, inventory, customers, suppliers, and reports. Includes dashboard + low-stock alerts.",
    tags: ["Java FX", "Java", "MySQL"],
    featured: true,
    img: "/fx.png",
    link: "https://github.com/Chalana001/Clothify-Store",
  },
  {
    title: "Website Project (Frontend)",
    desc: "A responsive business/shop website with modern sections and smooth UI. Mobile friendly.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    featured: false,
    img: "/web1.png",
    link: "https://pastimahiyangana.lk/",
  },
  {
    title: "Website Project (Full Stack)",
    desc: "Full stack website connected with backend API. Supports dynamic data handling and form features.",
    tags: ["React", "Spring Boot", "Java", "JavaScript", "API"],
    featured: false,
    img: "/web2.png",
    link: "https://newron-tech-support-web-frontend.vercel.app/",
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p, index) => (
          <motion.a
            key={index}
            variants={card}
            className={`project-card ${p.featured ? "featured" : ""}`}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -10, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* ✅ Featured badge */}
            {p.featured && (
              <motion.div
                className="featured-badge"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                ⭐ Featured
              </motion.div>
            )}

            <div className="project-img">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-footer">
                <div className="tags">
                  {p.tags.map((t, i) => (
                    <span key={i} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="btn small">View</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
