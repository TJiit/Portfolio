import "../styles/project-details.css";
import ProjectGallery from "../components/ProjectGallery";

import cyber1 from "../assets/images/cyber-security1.png";
import cyber2 from "../assets/images/cyber-security2.png";
import cyber3 from "../assets/images/cyber-security3.png";

import cyber4 from "../assets/images/cyber-security4.png";
import cyber5 from "../assets/images/cyber-security5.png";
import cyber6 from "../assets/images/cyber-security6.png";
import cyber7 from "../assets/images/cyber-security7.png";
import cyber8 from "../assets/images/cyber-security8.png";
import cyber9 from "../assets/images/cyber-security9.png";
import cyber10 from "../assets/images/cyber-security10.png";
import cyber11 from "../assets/images/cyber-security11.png";
import cyber12 from "../assets/images/cyber-security12.png";
import cyber13 from "../assets/images/cyber-security13.png";
import cyber14 from "../assets/images/cyber-security14.png";
import cyber15 from "../assets/images/cyber-security15.png";
import cyber16 from "../assets/images/cyber-security16.png";

import cyber17 from "../assets/images/cyber-security17.png";
import cyber18 from "../assets/images/cyber-security18.png";
import cyber19 from "../assets/images/cyber-security19.png";
import cyber20 from "../assets/images/cyber-security20.png";
import cyber21 from "../assets/images/cyber-security21.png";
import cyber22 from "../assets/images/cyber-security22.png";
import cyber23 from "../assets/images/cyber-security23.png";
import cyber24 from "../assets/images/cyber-security24.png";
import cyber25 from "../assets/images/cyber-security25.png";
import cyber26 from "../assets/images/cyber-security26.png";
import cyber27 from "../assets/images/cyber-security27.png";
import cyber28 from "../assets/images/cyber-security28.png";
import cyber29 from "../assets/images/cyber-security29.png";

import cyber30 from "../assets/images/cyber-security30.png";
import cyber31 from "../assets/images/cyber-security31.png";
import cyber32 from "../assets/images/cyber-security32.png";
import cyber33 from "../assets/images/cyber-security33.png";
import cyber34 from "../assets/images/cyber-security34.png";
import cyber35 from "../assets/images/cyber-security35.png";
import cyber36 from "../assets/images/cyber-security36.png";
import cyber37 from "../assets/images/cyber-security37.png";
import cyber38 from "../assets/images/cyber-security38.png";

import cyber39 from "../assets/images/cyber-security39.png";
import cyber40 from "../assets/images/cyber-security40.png";
import cyber41 from "../assets/images/cyber-security41.png";
import cyber42 from "../assets/images/cyber-security42.png";

import cyber43 from "../assets/images/cyber-security43.png";
import cyber44 from "../assets/images/cyber-security44.png";
import cyber45 from "../assets/images/cyber-security45.png";
import cyber46 from "../assets/images/cyber-security46.png";
import cyber47 from "../assets/images/cyber-security47.png";

import {
  FaArrowLeft,
  FaShieldAlt,
  FaSearch,
  FaNetworkWired,
  FaGlobe,
  FaLock,
  FaUserShield
} from "react-icons/fa";


function Cybersecurity() {

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
          Cybersecurity Coursework • Second Semester 2026
        </span>

        <h1>Vulnerability Assessment</h1>

        <p className="project-details-intro">
          A practical cybersecurity coursework project focused on
          identifying, analysing and understanding common security
          vulnerabilities through reconnaissance, scanning,
          vulnerability assessment and controlled security testing.
        </p>


        {/* TECHNOLOGIES */}

        <div className="details-technologies">

          <span>
            <FaShieldAlt />
            Cyber security
          </span>

          <span>
            <FaSearch />
            Reconnaissance
          </span>

          <span>
            <FaNetworkWired />
            Network Security
          </span>

          <span>
            <FaGlobe />
            Web Security
          </span>

          <span>
            <FaLock />
            Cryptography
          </span>

        </div>

      </section>


      {/* ABOUT */}

      <section className="project-details-section">

        <h2>About the Coursework</h2>

        <p>
          This coursework provided practical experience in
          cybersecurity assessment and vulnerability analysis.
          The work covered different stages of security testing,
          beginning with information gathering and reconnaissance
          before progressing into scanning, vulnerability assessment
          and controlled exploitation.
        </p>

        <p>
          The coursework explored vulnerabilities across network
          systems, web applications, cryptographic mechanisms and
          user-related security weaknesses.
        </p>

      </section>


      {/* TOPIC 1 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">01. </span>
          OSINT & Passive Reconnaissance
        </h2>

        <p>
          The first stage focused on Open-Source Intelligence (OSINT)
          and passive reconnaissance. Information was gathered from
          publicly available sources to understand the target
          environment without directly interacting with the target
          systems.
        </p>

        <ProjectGallery
          images={[
            cyber1,
            cyber2,
            cyber3
          ]}
        />

      </section>


      {/* TOPIC 2 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">02. </span>
          Active Reconnaissance – Scanning & Enumeration
        </h2>

        <p>
          The second stage involved active reconnaissance, including
          scanning and enumeration. The objective was to identify
          available hosts, services, ports and other information
          that could be relevant when assessing the security of the
          environment.
        </p>

        <ProjectGallery
          images={[
            cyber4,
            cyber5,
            cyber6,
            cyber7,
            cyber8,
            cyber9,
            cyber10,
            cyber11,
            cyber12,
            cyber13,
            cyber14,
            cyber15,
            cyber16
          ]}
        />

      </section>


      {/* TOPIC 3 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">03. </span>
          Exploiting Network Vulnerabilities
        </h2>

        <p>
          This section focused on understanding and testing network
          vulnerabilities in a controlled coursework environment.
          The activities helped demonstrate how weaknesses in
          network services can create security risks.
        </p>

        <ProjectGallery
          images={[
            cyber17,
            cyber18,
            cyber19,
            cyber20,
            cyber21,
            cyber22,
            cyber23,
            cyber24,
            cyber25,
            cyber26,
            cyber27,
            cyber28,
            cyber29
          ]}
        />

      </section>


      {/* TOPIC 4 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">04. </span>
          Exploiting Web Application Vulnerabilities
        </h2>

        <p>
          This section examined common web application security
          weaknesses. The practical work included testing for
          vulnerabilities such as SQL Injection and Cross-Site
          Scripting (XSS) within the authorised coursework
          environment.
        </p>

        <ProjectGallery
          images={[
            cyber30,
            cyber31,
            cyber32,
            cyber33,
            cyber34,
            cyber35,
            cyber36,
            cyber37,
            cyber38
          ]}
        />

      </section>


      {/* TOPIC 5 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">05. </span>
          Exploiting Cryptographic Weaknesses
        </h2>

        <p>
          This section explored weaknesses associated with
          cryptographic mechanisms and helped develop an understanding
          of how poor implementation or weak cryptographic practices
          can affect information security.
        </p>

        <ProjectGallery
          images={[
            cyber39,
            cyber40,
            cyber41,
            cyber42
          ]}
        />

      </section>


      {/* TOPIC 6 */}

      <section className="project-details-section">

        <h2>
          <span className="project-section-number">06. </span>
          Exploiting Users' Weaknesses
        </h2>

        <p>
          The final section explored security risks associated with
          human factors. The practical activities demonstrated how
          user behaviour and awareness can influence the overall
          security of a system.
        </p>

        <ProjectGallery
          images={[
            cyber43,
            cyber44,
            cyber45,
            cyber46,
            cyber47
          ]}
        />

      </section>


      {/* SKILLS */}

      <section className="project-details-section">

        <h2>Skills Developed</h2>

        <div className="feature-grid">

          <div className="feature-item">
            <FaSearch />
            <h3>Reconnaissance</h3>
            <p>
              Developed practical experience in passive and active
              reconnaissance techniques.
            </p>
          </div>


          <div className="feature-item">
            <FaNetworkWired />
            <h3>Network Security</h3>
            <p>
              Gained experience analysing network services and
              identifying potential vulnerabilities.
            </p>
          </div>


          <div className="feature-item">
            <FaGlobe />
            <h3>Web Security</h3>
            <p>
              Developed an understanding of common web application
              vulnerabilities and security testing.
            </p>
          </div>


          <div className="feature-item">
            <FaShieldAlt />
            <h3>Risk Analysis</h3>
            <p>
              Learned to analyse security risks and consider
              appropriate mitigation strategies.
            </p>
          </div>

        </div>

      </section>


      {/* MY CONTRIBUTION */}

      <section className="project-details-section">

        <h2>My Contribution</h2>

        <p>
          I took responsibility for documenting the assessment,
          analysing vulnerabilities and researching security
          concepts throughout the coursework.
        </p>

        <ul className="contribution-list">

          <li>
            <strong>Documented the full security assessment</strong>,
            recording the testing process, findings and results.
          </li>

          <li>
            Examined and analysed <strong>individual vulnerability
            assessments</strong> to understand their causes and
            security impact.
          </li>

          <li>
            Applied <strong>problem-solving skills</strong> to
            investigate technical issues and determine appropriate
            approaches during the assessment.
          </li>

          <li>
            Conducted <strong>technical research</strong> to
            understand vulnerabilities, security concepts and
            potential mitigation strategies.
          </li>

        </ul>

      </section>


      {/* WHAT I LEARNED */}

      <section className="project-details-section">

        <h2>What I Learned</h2>

        <p>
          This coursework strengthened my understanding of
          cybersecurity assessment, reconnaissance, network security,
          web application security and vulnerability analysis.
          It also improved my ability to investigate technical
          problems systematically and document security findings.
        </p>

      </section>


      {/* BACK */}

      <section className="project-details-footer">

        <a href="/#projects" className="project-github-btn">
          <FaArrowLeft />
          Back to Projects
        </a>

      </section>

    </main>

  );
}


export default Cybersecurity;