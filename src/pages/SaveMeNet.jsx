import "../styles/project-details.css";
import ProjectGallery from "../components/ProjectGallery";

import savemenet1 from "../assets/images/savemenet-1.png";
import savemenet2 from "../assets/images/savemenet-2.png";
import savemenet3 from "../assets/images/savemenet-3.png";
import savemenet4 from "../assets/images/savemenet-4.png";
import savemenet5 from "../assets/images/savemenet-5.png";
import savemenet6 from "../assets/images/savemenet-6.png";
import savemenet7 from "../assets/images/savemenet-7.png";
import savemenet8 from "../assets/images/savemenet-8.png";

import {
  FaArrowLeft,
  FaGithub,
  FaPython,
  FaCode,
} from "react-icons/fa";

function SaveMeNet() {

  return (

    <main className="project-details">

      {/* BACK BUTTON */}

      <a href="/#projects" className="back-projects">
        <FaArrowLeft />
        Back to Projects
      </a>


      {/* HERO */}

      <section className="project-details-hero">

        <span className="project-details-label">
          Final Year Project • 2026
        </span>

        <h1>SaveMeNet</h1>

        <p className="project-details-intro">
          A privacy-focused desktop application designed to detect
          and pseudonymize personally identifiable information in
          documents before online submission.
        </p>


        {/* TECHNOLOGIES */}

        <div className="details-technologies">

          <span>
            <FaPython />
            Python
          </span>

          <span>
            <FaCode />
            PyQt5
          </span>

          <span>spaCy</span>

          <span>NLP</span>

          <span>PyMuPDF</span>

          <span>JSON</span>

        </div>

      </section>


      {/* PROJECT IMAGE */}

      <section className="project-details-image">

        <ProjectGallery
            images={[
            savemenet1,
            savemenet2,
            savemenet3,
            savemenet4,
            savemenet5,
            savemenet6,
            savemenet7,
            savemenet8,
            ]}
        />

      </section>


      {/* ABOUT */}

      <section className="project-details-section">

        <h2>About the Project</h2>

        <p>
          SaveMeNet is a local desktop application developed to help
          users protect sensitive personal information before
          submitting documents online.
        </p>

        <p>
          The system detects personally identifiable information such
          as names, locations, organizations, dates, email addresses
          and phone numbers, then replaces the detected information
          with anonymized alternatives.
        </p>

      </section>


      {/* FEATURES */}

      <section className="project-details-section">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-item">
            <h3>PII Detection</h3>
            <p>
              Detects sensitive information using NLP and pattern
              recognition techniques.
            </p>
          </div>


          <div className="feature-item">
            <h3>Document Anonymization</h3>
            <p>
              Replaces sensitive information with anonymized content
              before documents are shared online.
            </p>
          </div>


          <div className="feature-item">
            <h3>Restore Function</h3>
            <p>
              Allows the original information to be restored using
              the generated mapping data.
            </p>
          </div>


          <div className="feature-item">
            <h3>Offline Processing</h3>
            <p>
              Processes documents locally without requiring users to
              upload sensitive information to an external service.
            </p>
          </div>

        </div>

      </section>


      {/* MY CONTRIBUTION */}

      <section className="project-details-section">

        <h2>My Contribution</h2>

        <p>
          I designed and developed the application, including the
          user interface, document processing workflow, PII detection,
          anonymization logic and restoration functionality.
        </p>

      </section>


      {/* LEARNING */}

      <section className="project-details-section">

        <h2>What I Learned</h2>

        <p>
          Through this project, I strengthened my Python programming,
          object-oriented programming, NLP, desktop application
          development, debugging and problem-solving skills.
        </p>

      </section>


      {/* GITHUB */}

      <section className="project-details-footer">

        <a
          href="https://github.com/TJiit"
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-btn"
        >
          <FaGithub />
          View on GitHub
        </a>

      </section>

    </main>

  );
}

export default SaveMeNet;