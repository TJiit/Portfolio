import "../styles/project-details.css";
import ProjectGallery from "../components/ProjectGallery";

import vocarise1 from "../assets/images/vocarise-1.jpeg";
import vocarise2 from "../assets/images/vocarise-2.jpeg";
import vocarise3 from "../assets/images/vocarise-3.jpeg";
import vocarise4 from "../assets/images/vocarise-4.jpeg";
import vocarise5 from "../assets/images/vocarise-5.jpeg";
import vocarise6 from "../assets/images/vocarise-6.jpeg";
import vocarise7 from "../assets/images/vocarise-7.jpeg";

import {
  FaArrowLeft,
  FaGithub,
  FaReact,
  FaPython,
  FaCode,
} from "react-icons/fa";


function VocaRise() {

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

          Mobile Application • 2025

        </span>


        <h1>VocaRise</h1>


        <p className="project-details-intro">

          A mobile application developed to provide an interactive
          and engaging learning experience through a responsive
          mobile interface and Python-powered backend services.

        </p>


        {/* TECHNOLOGIES */}

        <div className="details-technologies">

          <span>

            <FaReact />

            React Native

          </span>


          <span>

            <FaPython />

            Python

          </span>


          <span>

            <FaCode />

            API Integration

          </span>


          <span>

            JavaScript

          </span>


          <span>

            Git

          </span>

        </div>

      </section>


      {/* SCREENSHOT GALLERY */}

      <section className="project-details-image">

        <ProjectGallery

          images={[
            vocarise1,
            vocarise2,
            vocarise3,
            vocarise4,
            vocarise5,
            vocarise6,
            vocarise7,
          ]}

        />

      </section>


      {/* ABOUT */}

      <section className="project-details-section">

        <h2>About the Project</h2>

        <p>

          VocaRise is a mobile application developed as a team
          project in 2025. The application focuses on creating an
          interactive and user-friendly mobile experience.

        </p>


        <p>

          The project involved developing mobile frontend
          components using React Native while communicating with
          backend services developed using Python.

        </p>

      </section>


      {/* KEY FEATURES */}

      <section className="project-details-section">

        <h2>Key Features</h2>


        <div className="feature-grid">


          <div className="feature-item">

            <h3>Mobile Interface</h3>

            <p>

              Developed responsive mobile components using
              React Native to create a smooth and accessible
              user experience.

            </p>

          </div>


          <div className="feature-item">

            <h3>Backend Integration</h3>

            <p>

              Integrated frontend components with Python
              backend services and handled communication
              between different parts of the application.

            </p>

          </div>


          <div className="feature-item">

            <h3>Data Flow</h3>

            <p>

              Worked with application data and API responses
              to ensure information was displayed correctly
              throughout the application.

            </p>

          </div>


          <div className="feature-item">

            <h3>Responsive Experience</h3>

            <p>

              Focused on creating an intuitive interface and
              improving user interaction across the mobile
              application.

            </p>

          </div>


        </div>

      </section>


      {/* MY CONTRIBUTION */}

      <section className="project-details-section">

        <h2>My Contribution</h2>

        <p>

          I contributed to the frontend development, backend
          support, research and documentation of the VocaRise
          project.

        </p>

        <ul className="contribution-list">

          <li>
            Designed the <strong>VocaRise logo</strong>.
          </li>

          <li>
            Developed the <strong>home, login and sign-up
            pages</strong>.
          </li>

          <li>
            Contributed to other <strong>application pages </strong>
            with team members.
          </li>

          <li>
            Assisted with <strong>backend management</strong> and
            API integration.
          </li>

          <li>
            Conducted <strong>research and reviewed research
            papers</strong> for the project.
          </li>

          <li>
            Organised the <strong>project documentation </strong>
            and assigned sections to team members.
          </li>

          <li>
            Helped <strong>finalise and organise</strong> the
            project documentation.
          </li>

        </ul>

      </section>


      {/* DEVELOPMENT EXPERIENCE */}

      <section className="project-details-section">

        <h2>Development Experience</h2>

        <p>

          Working on VocaRise gave me practical experience in
          mobile application development and helped me understand
          how frontend applications communicate with backend
          services.

        </p>


        <p>

          It also improved my understanding of collaborative
          development, Git-based workflows and building interfaces
          with user interaction in mind.

        </p>

      </section>


      {/* WHAT I LEARNED */}

      <section className="project-details-section">

        <h2>What I Learned</h2>

        <p>

          Through VocaRise, I strengthened my React Native,
          JavaScript and API integration skills while gaining
          experience working with a Python backend.

        </p>


        <p>

          The project also helped me improve my teamwork,
          communication, version control and problem-solving
          skills.

        </p>

      </section>

      <section className="project-details-footer">

        {/* Footer */}
        <a href="/#projects" className="project-github-btn">
          <FaArrowLeft /> Back to Projects
        </a>

      </section>


    </main>

  );

}


export default VocaRise;