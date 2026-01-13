import "../styles/projects.css";

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
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <a
            className={`project-card ${p.featured ? "featured" : ""}`}
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-img">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-footer">
                <div className="tags">
                  {p.tags.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                  ))}
                </div>

                <a className="btn small" href={p.link} target="_blank" rel="noreferrer">
                  View
                </a>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
