function ProjectCard({ title, description, image, date, type }) {
  return (
    <div className="project-card">
      <img className="card-pic" src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        {type && <span className="project-type-badge">{type}</span>}
        <p className="meta">{date} {description}</p>
      </div>
    </div>
  )
}

export default ProjectCard