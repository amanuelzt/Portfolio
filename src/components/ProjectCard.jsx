function ProjectCard({ title, description, image, date }) {
    return (
        <div className="project-card">
            <img className="card-pic" src={image} alt={title} />
            <h3>{title}</h3>
            <p className="meta">{date} - {description}</p>
        </div>
    )
}
  
export default ProjectCard