import '../../styling/ProjectPage.css';


function ProjectCard({ project }) {
    let technologies = project.techs.split(', ')

    return (
        <div className="project-card">
            <div className="img-container">
                <img className= "project-image" src={`${process.env.PUBLIC_URL}/assets/project_images/${project.image}`} alt={project.name} />
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className='card-footer'>
                <div className='tech-tags'>
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <a href={project.link} className="project-button">View</a>
            </div>
            
            
            
        </div>
    ); 
}

export default ProjectCard;
