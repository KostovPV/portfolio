import Head from "next/head";
import ProjectContent from "@/components/Projects/project-detail/project-content"
import { getProjectData, getProjectsFiles } from "@/lib/projects-util";
import { Fragment } from "react";

function ProjectDetailPage(props) {
    return <Fragment>
        <Head>
            <title>{props.project.title}</title>
            <meta name="desctiption" content={props.project.excerpt} />
        </Head>
        <ProjectContent project={props.project} />
    </Fragment>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const projectData = getProjectData(slug);
    return {
        props: {
            project: projectData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const projectFilenames = getProjectsFiles();

    const slugs = projectFilenames.map(filename => filename.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    };
}

export default ProjectDetailPage