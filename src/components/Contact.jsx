import "../styles/contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p>Let’s work together. You can contact me directly:</p>

        <div className="contact-links">
          <motion.a className="btn small" href="mailto:ckalhara7277@gmail.com">
            <FaEnvelope /> Email
          </motion.a>

          <motion.a className="btn small primary" target="_blank" rel="noreferrer"
            href="https://wa.me/94704589764">
            <FaWhatsapp /> WhatsApp
          </motion.a>
        </div>

        <div className="contact-social">
          <p className="contact-social-title">Find me on</p>

          <div className="social-icons">
            <motion.a
              href="https://github.com/Chalana001"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/chalana-wijesingha"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://web.facebook.com/pamindu.chalana/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook />
            </motion.a>

            {/* Optional: Instagram */}
            <motion.a
              href="https://www.instagram.com/x_chala_/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
