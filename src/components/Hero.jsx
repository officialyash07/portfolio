import classes from '../styles/Hero.module.css';

import video from '../assets/loop.mp4';

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
                <video loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </section>
    );
};
export default Hero;
