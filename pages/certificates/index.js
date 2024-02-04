import Head from "next/head";
import { Fragment } from "react"

import Certificates from "@/components/certificates/certificates";



function CertificatesPage(props) {

    return (
        <Fragment>
            <Head>
                <title>Plamen Kostov official page</title>
                <meta name="description" content="Portfolio page of Plamen Kostov Web developer" />
            </Head>
         
            <Certificates />
        </Fragment>
    )
}



export default CertificatesPage