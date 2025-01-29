import classes from '../styles/About.module.css';

import Button from '../ui/Button';

import avatar from '../assets/avatar.png';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.avatar}>
                <img src={avatar} alt="avatar image" />
            </div>
            <div>
                <p className={classes.name}>about - yash pathik</p>
                <p className={classes.description}>
                    I&apos;m a passionate full-stack developer who loves turning ideas into functional and visually
                    appealing digital experiences. With expertise in both front-end and back-end development, I build
                    scalable, efficient, and user-friendly applications.With expertise in AWS cloud services, I design
                    and deploy secure, high-performance solutions that leverage the power of cloud computing.
                </p>
                <Button className={classes.resumeBtn}>resume</Button>
            </div>
        </section>
    );
};
export default About;
