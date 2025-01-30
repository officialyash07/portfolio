import classes from '../styles/Skills.module.css';

import {
    apiIcon,
    cssIcon,
    databaseIcon,
    expressIcon,
    figmaIcon,
    gitIcon,
    githubIcon,
    htmlIcon,
    javascriptIcon,
    nodeIcon,
    reactIcon,
    responsiveIcon,
    sqlIcon,
} from '../Icons';

const Skills = () => {
    const icons = [
        apiIcon,
        cssIcon,
        databaseIcon,
        expressIcon,
        figmaIcon,
        gitIcon,
        githubIcon,
        htmlIcon,
        javascriptIcon,
        nodeIcon,
        reactIcon,
        responsiveIcon,
        sqlIcon,
    ];

    return (
        <section className={classes.skillContainer}>
            <h2>professional skills</h2>
            <div className={classes.skills}>
                {icons.map((icon) => (
                    <div key={icon} className={classes.skill}>
                        <img src={icon} alt="" />
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills;
