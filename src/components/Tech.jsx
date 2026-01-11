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
import "../styles/tech.css";

export default function Tech() {
  const tech = [
    { name: "React", icon: <SiReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <FaJsSquare  /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <section className="section tech-section">
      <h2 className="section-title">Tech I Use</h2>

      <div className="tech-grid">
        {tech.map((t, i) => (
          <div key={i} className="tech-card" title={t.name}>
            <div className="tech-icon">{t.icon}</div>
            <p className="tech-name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
