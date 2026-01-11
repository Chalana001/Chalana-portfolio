import "../styles/skills.css";

export default function Skills() {
  const skills = ["React","Spring Boot", "Java", "HTML", "CSS", "JavaScript", "MySQL", "GitHub", "Vercel"];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill">{s}</div>
        ))}
      </div>
    </section>
  );
}
