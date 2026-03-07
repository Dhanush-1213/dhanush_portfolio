import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contact.css";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uepboab",
      "template_zuolh8b",
      form.current,
      "70ZUhf2vIB3UWPK83"
    )
    .then(() => {
      alert("Message sent successfully 🚀");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });

    e.target.reset();
  };

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
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >

      <motion.h2 className="section-title" variants={fadeUp}>
        Let’s Ruin Everything Together
      </motion.h2>

      <motion.p className="contact-text" variants={fadeUp}>
        Code doing weird stuff? Dataset behaving like it has attitude?
        Inbox always open.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        variants={fadeUp}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="you@domain.com"
          required
        />

        <textarea
          name="message"
          placeholder="Spill the disaster…"
          required
        />

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
          href="mailto:dhanushk9972@gmail.com"
          className="gmail"
          variants={fadeUp}
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://x.com/Dhanushk9972"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
          variants={fadeUp}
        >
          <FaXTwitter />
        </motion.a>

      </motion.div>

    </motion.section>
  );
}