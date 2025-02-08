import classes from './page.module.css';

import Image from 'next/image';

import blob from '@/assets/blob-1.svg';
import heroImage from '@/assets/character.png';

const Home = () => {
    return (
        <main className={classes.main}>
            <div className={classes.introduction}>
                <h1>I&apos;m Yash</h1>
                <div className={classes.subtitle}>
                    <h2>Full Stack Developer</h2>
                </div>
                <p>Crafting Seamless Web Solutions</p>
            </div>
            <div className={classes.hero}>
                <div className={classes.blob}>
                    <Image src={blob} alt="A background blob svg for the hero" width={600} priority />
                </div>
                <div className={classes.heroImg}>
                    <Image src={heroImage} alt="A picture of hero" width={400} height={650} />
                </div>
            </div>
        </main>
    );
};

export default Home;
