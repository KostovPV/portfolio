

import Link from 'next/link';
import classes from './certificates.module.css'

function Certificates() {
    return <section className={classes.certificates}>


        <h1 >These are the certificates I obtained during my education on the path of becoming a web developer.</h1>
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
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/182957/67330d77'>
                        Angular
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/174814/8f799108'>
                        HTML and CSS
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/169797/e02a2ee0'>
                        JS Back End
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/149785/3c61888f'>
                        JS Applications

                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/145380/b5e28114'>
                        JS Advanced
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/141453/576473a4'>
                        Programming Fundamentals
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/131264/e5a3f326'>
                        Programming basic
                    </Link>
                </li>
                <li>
                    <Link href='https://softuni.bg/certificates/details/193289/99af303f'>
                        Agile Essentials with Scrum
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

                <li>
                    <Link href='https://www.udemy.com/certificate/UC-d13c3ee4-e18b-4009-bd1a-b121081ad261/'>
                        The Ultimate MySQL Bootcamp: Go
                        from SQL Beginner to Expert - Udemy
                    </Link>
                </li>

                <li>
                    <Link href='https://www.udemy.com/certificate/UC-00f5b88a-8484-4a4a-94d4-38e7c765f5e6/'>
                        Mastering TypeScript - 2024 Edition

                    </Link>
                </li>

                <li>
                    <Link href='https://www.udemy.com/certificate/UC-13f628d2-c018-4141-b892-e389c504e97e/'>
                        Build Web Apps with React & Firebase -
                        Udemy

                    </Link>
                </li>
                <li>
                    <Link href='https://www.udemy.com/certificate/UC-b4bb7a04-0c7f-424b-b327-1d5a45b96cb3/'>
                        Agile Fundamentals: Including Scrum &
                        Kanban - Udemy
                    </Link>
                </li>
            </ul>
        </section>

    </section>

}

export default Certificates;