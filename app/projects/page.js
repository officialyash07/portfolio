import Project from "@/components/Projects/project";
import classes from "./page.module.css";

import calImg from "@/assets/project-images/calculator/cal-2.png";
import ceramicImg from "@/assets/project-images/cermaic-shop/ceramic-1.png";
import countryImg from "@/assets/project-images/countries/country-2.png";
import faceboohImg from "@/assets/project-images/facebook/facebook-1.png";
import ipImg from "@/assets/project-images/ip-address/ip.png";
import watchvistaImg from "@/assets/project-images/watchvista/watchvista-1.png";

const ProjectsPage = () => {
    return (
        <main className={classes.main}>
            <h1>Featured Projects</h1>
            <div className={classes.projects}>
                <div>
                    <Project
                        linkHref="/projects"
                        src={ipImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                    <Project
                        linkHref="/projects"
                        src={ceramicImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                    <Project
                        linkHref="/projects"
                        src={faceboohImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                </div>
                <div className={classes.secondCol}>
                    <Project
                        linkHref="/projects"
                        src={countryImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                    <Project
                        linkHref="/projects"
                        src={calImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                    <Project
                        linkHref="/projects"
                        src={watchvistaImg}
                        title="Calculator"
                        description="A Calculator with 3 different themes."
                        codeHref="/projects"
                    />
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
