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

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Animation variants
  const navContainer = {
    hidden: { y: -80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const navItem = { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      variants={navContainer}
      initial="hidden"
      animate="show"
    >
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <span>D!Code</span>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            variants={navItem}
            className={active === item.id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById(item.id);
              section.scrollIntoView({ behavior: "smooth", block: "start" });
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
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}