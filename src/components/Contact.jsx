import "../styles/contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-header">
        <h2>Let's Connect</h2>
        <p>Have a project or opportunity in mind?</p>
      </div>


      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-content">

          <span className="contact-label">
            Get In Touch
          </span>

          <h3>
            Let's create something
            <span> meaningful.</span>
          </h3>

          <p>
            I'm interested in web development, UI/UX design, and
            creating meaningful digital experiences. Whether you have
            a project idea, an opportunity, or simply want to connect,
            feel free to reach out.
          </p>


          <a
            href="mailto:thakshilaj2003@gmail.com"
            className="contact-email"
          >
            <FaEnvelope />
            <span>thakshilaj2003@gmail.com</span>
          </a>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-links">

          <a
            href="https://github.com/TJiit"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div className="contact-link-icon">
              <FaGithub />
            </div>

            <div>
              <span>GitHub</span>
              <p>github.com/TJiit</p>
            </div>

            <FaArrowRight className="contact-link-arrow" />

          </a>


          <a
            href="https://www.linkedin.com/in/thakshila-jayasuriya-887047332"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div className="contact-link-icon">
              <FaLinkedinIn />
            </div>

            <div>
              <span>LinkedIn</span>
              <p>https://www.linkedin.com/in/thakshila-jayasuriya-887047332

</p>
            </div>

            <FaArrowRight className="contact-link-arrow" />

          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;