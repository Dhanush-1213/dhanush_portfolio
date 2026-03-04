import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let’s Ruin Everything Together</h2>

        <p className="contact-text">
         Backend failing spectacularly? Dataset plotting rebellion? Startup teetering on genius-level insanity? 
         Inbox: always open, like a crime scene. Not “business hours.” Emergency mode only.
        </p>
    
      <form className="contact-form">
        <input type="email" placeholder="you@domain.com" />
        <textarea placeholder="Spill the disaster…" />
        <button type="submit">Send Chaos</button>
      </form>

      <div className="social-links">
        <a
          href="https://github.com/Dhanush-1213"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dhanush-k-pesuniversity"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Dhanushk9972"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}