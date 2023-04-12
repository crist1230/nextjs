import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/girls.jpg' alt='An image showing cousins' width={300} height={300} />
            </div>
            <h1>Hi, I'm Cristiana</h1>
            <p>
                I blog about things I learn on my journey of life.
            </p>
        </section>
    );
};

export default Hero;