

import Link from 'next/link';
import classes from './certificates.module.css'
import Image from "next/image";

function Certificates() {
  return <section className={classes.allCertificates}>


    <h1 >These are the certificates I obtained during my education on the path of becoming a web developer</h1>
    <section className={classes.certificates}>
      <h2>SoftUni courses</h2>
      <ul className={classes.certificatesList}>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/201769/ca78a7c6'>


            <div className={classes.image}>
              <Image
                src='/images/certificates/diploma.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>

          </Link>
          <div className={classes.text}>JS Web Developer </div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/201179/e7a890d0'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/reactJs.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}> React JS </div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/193647/b4f9a868'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/typeScriptSoftUni.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}>TypeScript</div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/182957/67330d77'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/angular.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}> Angular</div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/174814/8f799108'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/htmlCss.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}>HTML and CSS </div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/169797/e02a2ee0'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/jsBackEnd.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}> JS Back End</div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/149785/3c61888f'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/jsApplications.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}> JS Applications </div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/145380/b5e28114'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/jsAdvanced.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}>   JS Advanced </div>
        </li >
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/141453/576473a4'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/programmingFundamentals.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}>Programming Fundamentals</div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/131264/e5a3f326'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/programmingBasic.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
          </Link>
          <div className={classes.text}>Programming basic</div>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://softuni.bg/certificates/details/193289/99af303f'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/agileEssentials.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}> Agile Essentials with Scrum </div>
          </Link>
        </li>

      </ul>
    </section>
    <section className={classes.certificates}>
      <h2>Udemy courses</h2>
      <ul className={classes.certificatesList}>

        <li className={classes.certificateItem}>
          <Link href='https://www.udemy.com/certificate/UC-e8da160e-c378-476b-bdc5-bc9543931d19/'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/next.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}>Udemy course NextJs</div>
          </Link>
        </li>

        <li className={classes.certificateItem}>
          <Link href='https://www.udemy.com/certificate/UC-d13c3ee4-e18b-4009-bd1a-b121081ad261/'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/MYSQL.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}>The Ultimate MySQL Bootcamp: Go
              from SQL Beginner to Expert - Udemy </div>
          </Link>
        </li>

        <li className={classes.certificateItem}>
          <Link href='https://www.udemy.com/certificate/UC-00f5b88a-8484-4a4a-94d4-38e7c765f5e6/'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/typescrypt.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}>Mastering TypeScript - 2024 Edition </div>
          </Link>
        </li>

        <li className={classes.certificateItem}>
          <Link href='https://www.udemy.com/certificate/UC-13f628d2-c018-4141-b892-e389c504e97e/'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/reactUdemy.png'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}>     Build Web Apps with React & Firebase -
              Udemy </div>
          </Link>
        </li>
        <li className={classes.certificateItem}>
          <Link href='https://www.udemy.com/certificate/UC-b4bb7a04-0c7f-424b-b327-1d5a45b96cb3/'>

            <div className={classes.image}>
              <Image
                src='/images/certificates/agile.jpg'
                alt='JS Web Developer image'
                width={100}
                height={100}
                layout="responsive" />
            </div>
            <div className={classes.text}> Agile Fundamentals: Including Scrum &
              Kanban - Udemy</div>
          </Link>
        </li>
      </ul>
    </section>

  </section>

}

export default Certificates;





