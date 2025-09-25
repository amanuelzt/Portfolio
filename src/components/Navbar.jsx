
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo as a button to home */}
        <h1 className="logo">
          <Link to="/" className="logo-link">Amanuel Tedla</Link>
        </h1>

        <div className="nav-links">
          <a href="https://linkedin.com/in/amanueltedla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:amanuelzt@gmail.com">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar