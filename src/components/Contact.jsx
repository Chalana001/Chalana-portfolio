import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-box">
        <p>Let’s work together. You can contact me directly:</p>

        <div className="contact-links">
          <a className="btn small" href="mailto:ckalhara7277@gmail.com">
            Email
          </a>
          <a
            className="btn small primary"
            target="_blank"
            href="https://wa.me/94704589764"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
