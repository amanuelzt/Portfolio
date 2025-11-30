import { Mail, Linkedin } from "lucide-react"

function Contact() {
  return (
    <div className="contact-page fade-in">

      <div className="contact-container">
        <h1 className="contact-heading">
          Let's make design more inclusive.
        </h1>

        <div className="contact-divider"></div>

        <p className="contact-subtext">
          Whether it's collaboration, opportunities, or just saying hi — I'd love to connect.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <a href="mailto:amanuelzt@gmail.com" className="contact-link">
              amanueltzt@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <Linkedin className="contact-icon" />
            <a
              href="https://linkedin.com/in/amanueltedla"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Amanuel Tedla on LinkedIn
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact