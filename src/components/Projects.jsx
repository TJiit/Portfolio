import { useState } from "react";
import "../styles/projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaShieldAlt,
  FaArrowRight,
  FaArrowLeft,
  FaBook,
} from "react-icons/fa";

import saveMeNetImage from "../assets/images/savemenet.png";

function Projects() {

  const [projectPage, setProjectPage] = useState(0);

  return (

    <section className="projects" id="projects">

      <div className="section-header">
        <h2>My Projects</h2>
        <p>Things I've built and worked on.</p>
      </div>


      {/* =========================
          PAGE 1
      ========================== */}

      {projectPage === 0 && (

        <div className="project-page">

          {/* FEATURED PROJECT */}

          <div className="featured-project">

            <div className="project-image">

              <img
                src={saveMeNetImage}
                alt="SaveMeNet application"
              />

            </div>


            <div className="project-content">

              <span className="project-label">
                Featured Project
              </span>

              <h3>SaveMeNet</h3>

              <p>
                A privacy-focused desktop application designed to detect
                and pseudonymize personally identifiable information in
                CVs and documents before online submission.
              </p>


              <div className="project-technologies">

                <span>
                  <FaPython />
                  Python
                </span>

                <span>PyQt5</span>
                <span>spaCy</span>
                <span>NLP</span>
                <span>PyMuPDF</span>
                <span>JSON</span>

              </div>


              <div className="project-buttons">

                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="/projects/savemenet"
                  className="project-btn secondary-project-btn"
                >
                  <FaExternalLinkAlt />
                  View Project
                </a>

              </div>

            </div>

          </div>


          {/* TWO SMALL PROJECTS */}

          <div className="small-projects">


            {/* VocaRise */}

            <div className="project-card">

              <div className="project-card-icon">
                <FaMobileAlt />
              </div>

              <span className="project-card-label">
                Mobile Application
              </span>

              <h3>VocaRise</h3>

              <p>
                A mobile application developed using React Native and
                Python, focusing on frontend components, responsiveness,
                API integration and data flow.
              </p>

              <div className="project-tags">
                <span>React Native</span>
                <span>Python</span>
                <span>APIs</span>
                <span>Git</span>
              </div>

              <a
                href="/projects/vocarise"
                className="card-link"
              >
                View Project
                <FaExternalLinkAlt />
              </a>

            </div>


            {/* Beyond Roots */}

            <div className="project-card">

              <div className="project-card-icon">
                <FaCode />
              </div>

              <span className="project-card-label">
                Web Development
              </span>

              <h3>Beyond Roots</h3>

              <p>
                A responsive personal website developed as a group
                project using HTML, CSS and JavaScript.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <br />

              <a
                href="/projects/beyond-roots"
                className="card-link"
              >
                View Project
                <FaExternalLinkAlt />
              </a>

            </div>

          </div>


          {/* NEXT BUTTON */}

          <div className="project-navigation">

            <button
              className="project-arrow disabled"
              aria-label="Previous projects"
            >
              <FaArrowLeft />
            </button>

            <button
              className="project-arrow"
              onClick={() => setProjectPage(1)}
              aria-label="Next projects"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      )}


      {/* =========================
          PAGE 2
      ========================== */}

      {projectPage === 1 && (

        <div className="project-page">

          <div className="small-projects project-page-two">


            {/* OceanLens */}

            <div className="project-card">

              <div className="project-card-icon">
                <FaPalette />
              </div>

              <span className="project-card-label">
                UI/UX Design
              </span>

              <h3>OceanLens</h3>

              <p>
                Low-fidelity and high-fidelity prototypes created using
                Figma, focusing on usability, user-centered design,
                interface consistency and HCI principles.
              </p>

              <div className="project-tags">
                <span>Figma</span>
                <span>UI Design</span>
                <span>HCI</span>
                <span>Prototyping</span>
              </div>

              <a
                href="/projects/oceanlens"
                className="card-link"
              >
                View Design
                <FaExternalLinkAlt />
              </a>

            </div>


            {/* Cybersecurity */}

            <div className="project-card">

              <div className="project-card-icon">
                <FaShieldAlt />
              </div>

              <span className="project-card-label">
                Cybersecurity
              </span>

              <h3>Vulnerability Assessment</h3>

              <p>
                A security assessment project involving reconnaissance,
                scanning, vulnerability identification and analysis of
                common web security risks.
              </p>

              <div className="project-tags">
                <span>Cybersecurity</span>
                <span>OWASP</span>
                <span>Security Testing</span>
              </div>

              <a
                href="/projects/cybersecurity"
                className="card-link"
              >
                View Project
                <FaExternalLinkAlt />
              </a>

            </div>


            {/* BOOKRACKS */}

            <div className="project-card future-project">

              <div className="project-card-icon">
                <FaBook />
              </div>

              <span className="project-card-label">
                Future Project
              </span>

              <h3>BookRacks</h3>

              <p>
                A mobile application currently in development for avid
                readers to manage their personal book collection and
                quickly search for books, authors and previously
                purchased titles while shopping.
              </p>

              <div className="project-tags">
                <span>React Native</span>
                <span>Expo</span>
                <span>OCR</span>
                <span>Mobile App</span>
              </div>

              <a href="/projects/bookracks" className="card-link">
                 View Project
                <FaExternalLinkAlt />
              </a>
            </div>


            {/* FUTURE PROJECT */}

            <div className="project-card future-project">

              <div className="project-card-icon">
                <FaCode />
              </div>

              <span className="project-card-label">
                Coming Soon
              </span>

              <h3>Future Project</h3>

              <p>
                More projects and experiments will appear here as I
                continue learning, designing and building.
              </p>

            </div>

          </div>


          {/* PREVIOUS / NEXT BUTTONS */}

          <div className="project-navigation">

            <button
              className="project-arrow"
              onClick={() => setProjectPage(0)}
              aria-label="Previous projects"
            >
              <FaArrowLeft />
            </button>

            <button
              className="project-arrow disabled"
              aria-label="Next projects"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

      )}

    </section>

  );

}

export default Projects;