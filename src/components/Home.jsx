import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [visibleProjects, setVisibleProjects] = useState([])

  const handleCardClick = (slug) => {
    navigate(`/projects/${slug}`)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight
      const newVisible = projects.map((_, i) => {
        const el = document.getElementById(`project-${i}`)
        if (!el) return false
        return el.offsetTop < scrollY
      })
      setVisibleProjects(newVisible)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
  <div className="fade-in">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I'm Amanuel Tedla</h1>
          <p className="hero-subtitle">
            UX Designer focused on clarity, accessibility, and human-centered systems.
          </p>
          <button onClick={scrollToProjects} className="scroll-link">
            View My Work ↓
          </button>
        </div>

        <div className="hero-image">
          <img
            src="/images/About/AboutPicture.png"
            alt="Portrait of Amanuel Tedla"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
    {/* About Preview Section */}
    <section className="about-preview">
  <div className="about-preview-container">
    <div className="about-preview-grid">

      <div className="about-preview-left">
        <h2>About Me</h2>
        <div className="about-accent-line" />
      </div>

      <div className="about-preview-right">
        <p>
          Born in Ethiopia, raised in Botswana, and later moving to the United States,
          my global upbringing deeply shaped how I approach design — with empathy,
          inclusion, and clarity at the center.
        </p>

        <p>
          I focus on building accessible, human-centered digital experiences that
          reduce cognitive load and work for diverse users.
        </p>

        <button
          className="about-link"
          onClick={() => navigate('/about')}
        >
          Read My Full Story →
        </button>
      </div>

    </div>
  </div>
</section>

    {/* Projects Section */}
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <button
              key={index}
              id={`project-${index}`}
              onClick={() => handleCardClick(project.slug)}
              className={`project-card-button fade-in-section ${visibleProjects[index] ? 'is-visible' : ''}`}
            >
              <ProjectCard {...project} />
            </button>
          ))}
        </div>
      </div>
    </section>
  </div>
)
}

export default Home