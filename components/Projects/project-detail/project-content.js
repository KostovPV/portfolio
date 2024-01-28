import ReactMarkdown from 'react-markdown';

import ProjectHeader from "./project-header"
import classes from './project-content.module.css'

const DUMMY_PROJECT = {
    slug: 'geting-started-with-portfolio3',
    title: 'Portfolio statring project',
    image: 'geting-started-with-portfolio3.png',
    content: '# The is the project content',
    date: '2024-02-22'
}

function ProjectContent() {
    const imagePath = `/images/projects/${DUMMY_PROJECT.slug}/${DUMMY_PROJECT.image}`

    return (
        <article className={classes.content}>
            <ProjectHeader title={DUMMY_PROJECT.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_PROJECT.content}</ReactMarkdown>
        </article>
    )
}

export default ProjectContent