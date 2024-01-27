import ProjectsGrid from '../Projects/projects-grid'
import classes from './featured-projects.module.css'

function FeaturedProjects(props) {
    return <section className={classes.latest}>
        <h2>Reatured Projects</h2>
        <ProjectsGrid projects={props.projects} />
    </section>
}

export default FeaturedProjects