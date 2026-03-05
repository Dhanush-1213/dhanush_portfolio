import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {

  /* ============================= */
  /* Animation Variants */
  /* ============================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (

    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="show"

      /* Animation only once */
      viewport={{ once: true, amount: 0.3 }}

      variants={container}
    >

      {/* Title */}
      <motion.h2 className="section-title" variants={fadeUp}>
        Let’s Ruin Everything Together
      </motion.h2>

      {/* Description */}
      <motion.p className="contact-text" variants={fadeUp}>
        Backend failing spectacularly? Dataset plotting rebellion? Startup teetering on genius-level insanity?
        Inbox: always open, like a crime scene. Not “business hours.” Emergency mode only.
      </motion.p>

      {/* Contact Form */}
      <motion.form className="contact-form" variants={fadeUp}>
        <input type="email" placeholder="you@domain.com" required />
        <textarea placeholder="Spill the disaster…" required />
        <button type="submit">Send Chaos</button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="social-links"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.a
          href="https://github.com/Dhanush-1213"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
          variants={fadeUp}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/dhanush-k-pesuniversity"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
          variants={fadeUp}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://x.com/Dhanushk9972"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
          variants={fadeUp}
        >
          <FaTwitter />
        </motion.a>

      </motion.div>

    </motion.section>
  );
}