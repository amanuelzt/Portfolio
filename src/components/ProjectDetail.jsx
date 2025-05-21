import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <p>Project not found.</p>

  return (
    <div className="container">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>{project.title}</h1>
      <p><strong>{project.date} – {project.location}</strong></p>
      <img src={project.image} alt={project.title} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
      <p>{project.fullDescription}</p>
    </div>
  )
}

export default ProjectDetail
