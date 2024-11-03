import Head from "next/head";
import AllProjects from "@/components/Projects/all-projects"
import { getAllProjects } from "@/lib/projects-util"
import { Fragment } from "react";



function AllProjectsPage(props) {
    return <Fragment>
        <Head>
            <title>All projects</title>
            <meta name="description" content="A list of all projects in Plamen Kostov\'s portfolio" />
        </Head>
        <AllProjects projects={props.projects} />
    </Fragment>
}

export function getStaticProps() {
    const allProjects = getAllProjects();
    return {
        props: {
            projects: allProjects
        }
    }
}

export default AllProjectsPage
