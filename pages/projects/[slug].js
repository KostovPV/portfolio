import ProjectContent from "@/components/Projects/project-detail/project-content"
import { getProjectData, getProjectsFiles } from "@/lib/projects-util";

function ProjectDetailPage(props){
    return <ProjectContent project={props.project} />
}

export function getStaticProps(context) {
    const { params} = context;
    const { slug} = params;

    const projectData =  getProjectData(slug);
    return {
        props: {
            project: projectData
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
   const projectFilenames = getProjectsFiles();

   const slugs = projectFilenames.map(filename => filename.replace(/\.md$/, ''))

        return {
        paths: slugs.map(slug=>({params: {slug: slug} })),
        fallback: false
    };
}

export default ProjectDetailPage