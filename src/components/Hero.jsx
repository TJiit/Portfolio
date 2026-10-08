import "../styles/hero.css";
import profileImage from "../assets/images/profile.png";
import cvFile from "../assets/cv/CV Resume 2026.pdf";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      {/* Left Side */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>

      

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          Thakshila
        </h1>

        <h2 className="hero-title">
          Potential Software Engineer
          <br />
          <span>& UI/UX Enthusiast</span>
        </h2>

        <p className="hero-description">
          I enjoy creating modern web applications and intuitive user
          experiences that combine thoughtful design with clean,
          maintainable code.
        </p>

        <div className="hero-buttons">

          <a href={cvFile} download className="primary-btn">
            Download CV
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>

        </div>

      </motion.div>

      {/* Right Side */}

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>

        <div className="photo-frame">

          <img src={profileImage} alt="Thakshila" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;