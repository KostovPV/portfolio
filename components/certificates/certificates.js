

import Link from 'next/link';
// import classes from './certificates.module.css'

function Certificates() {
    return <section >


        <h1>Those are the certificates obtained during my education towards becoming a web developer</h1>
        <section>
            <h2>SoftUni cources</h2>
            <ul>
                <li>
                    <Link href='https://softuni.bg/certificates/details/201769/ca78a7c6'>
                        JS Web Developer
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/174814/8f799108'>
                        React JS
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/193647/b4f9a868'>
                    TypeScript
                    </Link>
                </li><li>
                    <Link href='https://softuni.bg/certificates/details/174814/8f799108'>
                    Angular
                    </Link>
                </li><li>
                    <Link href='https://softuni.bg/certificates/details/174814/8f799108'>
                    HTML and CSS
                    </Link>
                </li><li>
                    <Link href='https://softuni.bg/certificates/details/174814/8f799108'>
                        React JS
                    </Link>
                </li>
            </ul>
        </section>
        <section>
            <h2>Udemy cources</h2>
            <ul>
              
                <li>
                    <Link href='https://www.udemy.com/certificate/UC-d13c3ee4-e18b-4009-bd1a-b121081ad261/'>
                        Udemy course NextJs
                    </Link>
                </li>
            </ul>
        </section>

    </section>

}

export default Certificates;