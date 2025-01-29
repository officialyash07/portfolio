import classes from '../styles/Hero.module.css';

// import video from '../assets/loop.mp4';

import hero from '../assets/hero.png';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <h1>I&apos;m Yash.</h1>
            <div className={classes.post}>
                <div className={classes.postBlur} aria-hidden="true">
                    <p className={classes.postText}>Full Stack Developer</p>
                </div>
                <div className={classes.postClear}>
                    <p className={classes.postText}>Full Stack Developer</p>
                </div>
            </div>
            <div className={classes.anime}>
                <img src={hero} alt="" />
            </div>
        </section>
    );
};
export default Hero;
