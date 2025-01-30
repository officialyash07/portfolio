import classes from '../styles/Services.module.css';

import { DesignIcon, DevIcon, CloudIcon } from '../Icons';

const Services = () => {
    return (
        <section className={classes.serviceContainer}>
            <div className={classes.serviceMain}>
                <h2>services</h2>
                <p>Unlock a high-performance website that drives success with a complete, all-in-one solution.</p>
            </div>
            <div className={classes.services}>
                <div className={classes.service}>
                    <div className={classes.icon}>
                        <DesignIcon />
                    </div>
                    <div>
                        <h3>Design</h3>
                        <p>Get a custom design that sets your brand apart and attracts your target audience.</p>
                    </div>
                </div>
                <div className={classes.service}>
                    <div className={classes.icon}>
                        <DevIcon />
                    </div>
                    <div>
                        <h3>Development</h3>
                        <p>Receive a responsive, high-performance website that is optimized for search engines.</p>
                    </div>
                </div>
                <div className={classes.service}>
                    <div className={classes.icon}>
                        <CloudIcon />
                    </div>
                    <div>
                        <h3>Cloud</h3>
                        <p>
                            Deploy your website on a secure, high-performance cloud platform that scales with your
                            business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services;
