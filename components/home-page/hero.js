import Image from 'next/image'

import clsses from './hero.module.css'

function Hero() {
    return <section className={clsses.hero}>
        <div className={clsses.image}>
            <Image
                src="/images/site/profil.jpg"
                alt="An image showing Plamen"
                width={300}
                height={300} />
        </div>
        <h1>Hi, I'm Plamen</h1>
        <p>This is my personal web page</p>

    </section>

}

export default Hero;