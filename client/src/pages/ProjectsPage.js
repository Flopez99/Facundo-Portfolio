import '../styling/App.css';
import '../styling/ProjectPage.css';

import ProjectCard from './page_components/ProjectCard.js'
import { useState, useEffect } from 'react';

function ProjectsPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data/projects.json",
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error('Error fetching projects:', error));
}, []);
 

  return (
    <div className="ProjectsPage">
      <body className="App-header">
        <div className='page-header'>
          <h2 className='title'>My Projects</h2>
          <p className='subtitle'>Discover What I’ve Built and Designed </p>  
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
        <br/>
      </body>
    </div>
  );
}

export default ProjectsPage;
