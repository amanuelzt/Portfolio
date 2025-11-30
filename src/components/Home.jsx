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
        <div className="hero-content">
          <h1>Hi, I'm Amanuel Tedla</h1>
          <p>
            I'm a UI/UX Designer & Front-End Developer passionate about creating intuitive,
            accessible, and human-centered digital experiences.
          </p>
          <button onClick={scrollToProjects} className="scroll-link">
            View My Work ↓
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div
                key={index}
                id={`project-${index}`}
                onClick={() => handleCardClick(project.slug)}
                className={`fade-in-section ${visibleProjects[index] ? 'is-visible' : ''}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home