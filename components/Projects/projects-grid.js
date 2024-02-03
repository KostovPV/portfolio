import ProjectItem from './project-item';
import classes from './projects-grid.module.css'

function ProjectsGrid (props) {
    const {projects} = props;
if(projects){
    return (
        <section className={classes.projectsList}> 
              <ul className={classes.grid}>
            {projects.map((project)=> (
            <ProjectItem key={project.slug} project ={project} />
            ))}
        </ul>
        </section>
      
    )
}
   
}

export default ProjectsGrid