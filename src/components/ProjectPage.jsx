import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'

function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <div>Project not found</div>

  return (
    <div className="project-page">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>

      <header className="project-header">
        <h1>{project.title}</h1>
        <p className="project-meta">{project.date} — {project.location}</p>
        <img src={project.coverImage} alt={project.title} className="project-cover" />
      </header>

      <section className="project-section">
        <h2>Overview</h2>
        <p>{project.fullDescription}</p>
      </section>

      <section className="project-section">
        <h2>Problem</h2>
        <p>{project.problem || "Describe the problem this project aims to solve."}</p>
      </section>

      <section className="project-section">
        <h2>Process</h2>
        <p>{project.process || "Describe your approach, tools used, research, wireframing, prototyping, etc."}</p>
        {/* Example image */}
        <img src={project.processImage || "/images/example-process.png"} alt="Process diagram" className="project-image" />
      </section>

      <section className="project-section">
        <h2>Solution</h2>
        <p>{project.solution || "Summarize the final outcome and key features."}</p>
        {/* Add more images if needed */}
        <div className="project-gallery">
          {project.images?.map((img, i) => (
            <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="project-image" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectPage