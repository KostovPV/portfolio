// import clsses from './logo.module.css'

// function Logo(){
//     return <div className={clsses.logo}>Plamen's web page</div>
// }

// export default Logo


import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
    return (
        <div className={classes.logo}>
            <Image
                src="/logo.png" 
                alt="Plamen's Web Page Logo"
                width={150}  
                height={150} 
            />
        </div>
    );
}

export default Logo;
