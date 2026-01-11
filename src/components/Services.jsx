import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Business / Shop Websites",
      desc: "Modern responsive websites for shops, services, and businesses.",
    },
    {
      title: "Full Stack Web Apps",
      desc: "Dashboard systems, management apps, and API connected projects.",
    },
    {
      title: "Fix Bugs + Deploy",
      desc: "Bug fixing, optimization, and cloud deployment (Vercel/Firebase).",
    },
  ];

  return (
    <section className="section" id="services">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
