import Head from "next/head";
import { Fragment } from "react"

import FeaturedProjects from "@/components/home-page/featured-projects"
import Hero from "@/components/home-page/hero"
import { getFeaturedProjects } from "@/lib/projects-util"



function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>Plamen Kostov official page</title>
                <meta name="description" content="Portfolio page of the web developer Plamen Kostov" />
            </Head>
            <Hero />
            <FeaturedProjects projects={ props.projects} />
        </Fragment>
    )
}

export function getStaticProps(){
    const featuredProjects = getFeaturedProjects();

    return {
        props: {
            projects: featuredProjects
        }
    }
}

export default HomePage

