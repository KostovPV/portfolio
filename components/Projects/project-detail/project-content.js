import ReactMarkdown from 'react-markdown';
import ProjectHeader from "./project-header";
import classes from './project-content.module.css';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function ProjectContent(props) {
    const { project } = props;
    const imagePath = `/images/projects/${project.slug}/${project.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                const imageAlt = image.alt || "Image pf the project"; // Fallback alt text
                return (
                    <div className={classes.image} >
                        {/* <Image
                            src={`/images/projects/${project.slug}/${image.properties.src}`}
                            alt={imageAlt}
                            width={600}
                            height={300}
                        /> */}
                        <Image
                            src={`/images/projects/${project.slug}/${image.properties.src}`}
                            alt={imageAlt}
                            width={600}
                            height={300}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        },
        // Add other custom renderers if needed
    };

    return (
        <article className={classes.content}>
            <ProjectHeader title={project.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{project.content}</ReactMarkdown>
        </article>
    );
}

export default ProjectContent;
