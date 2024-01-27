import AllProjects from "@/components/Projects/all-projects"

const DUMMY_PROJECTS = [
    {
        slug: 'geting-started-with-portfolio',
        title: 'Portfolio statring project',
        image: 'geting-started-with-portfolio.png',
        excerpt: 'The Plamens project used to provide information for him',
        date: '2024-02-22'
    },
    {
        slug: 'geting-started-with-portfolio2',
        title: 'Portfolio statring project',
        image: 'geting-started-with-portfolio2.png',
        excerpt: 'The Plamens project used to provide information for him',
        date: '2024-02-22'
    },
    {
        slug: 'geting-started-with-portfolio3',
        title: 'Portfolio statring project',
        image: 'geting-started-with-portfolio3.png',
        excerpt: 'The Plamens project used to provide information for him',
        date: '2024-02-22'
    }
]

function AllProjectsPage(){
    return <AllProjects projects={DUMMY_PROJECTS} />
}

export default AllProjectsPage