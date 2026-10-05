import "../styles/navbar.css";
import cvFile from "../assets/cv/CV Resume 2026.pdf";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        Thakshila
      </div>

      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href={cvFile}
        download
        className="navbar-button"
      >
        Download CV
      </a>

    </header>
  );
}

export default Navbar;