import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaClock,
  FaLaptopCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "timeline", icon: <FaClock />, label: "Timeline" },
    { id: "techstack", icon: <FaLaptopCode />, label: "Techstack" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  // ✅ Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Professional section detection (FIXED)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // section must be 60% visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? "active" : ""}
            onClick={() => {
              setActive(item.id);
              setMenuOpen(false);
            }}
          >
            {item.icon}
            <span>{item.label}</span>

            {active === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}