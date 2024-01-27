import Link from "next/link"
import Image from "next/image";

import classes from './project-item.module.css';

function ProjectItem(props) {
    const { title, image, excerpt, date, slug } = props.project;

    const formatedDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;

    return (
        <li className={classes.project}>
            <Link href={linkPath}>

                <div className={classes.image}>
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout="responsive" />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatedDate}</time>
                    <p>{excerpt}</p>
                </div>

            </Link>
        </li>
    )
}
export default ProjectItem