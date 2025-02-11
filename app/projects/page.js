import Project from "@/components/Projects/project";
import classes from "./page.module.css";

import calImg from "@/assets/project-images/calculator/cal-2.png";
import ceramicImg from "@/assets/project-images/cermaic-shop/ceramic-1.png";
import countryImg from "@/assets/project-images/countries/country-2.png";
import facebookImg from "@/assets/project-images/facebook/facebook-1.png";
import ipImg from "@/assets/project-images/ip-address/ip.png";
import watchvistaImg from "@/assets/project-images/watchvista/watchvista-1.png";
import spaceImg from "@/assets/project-images/space-tourism/space.png";
import productMainImg from "@/assets/project-images/product-main-page/product-page.png";

const ProjectsPage = () => {
    return (
        <main className={classes.main}>
            <h1>Featured Projects</h1>
            <div className={classes.projects}>
                <div>
                    <Project
                        linkHref="https://space-tourism-pi-seven.vercel.app/"
                        src={spaceImg}
                        title="Space Tourism Website"
                        description="Explore the Cosmos with Us! Embark on the ultimate adventure with our space tourism experiences."
                        codeHref="https://github.com/officialyash07/space-tourism.git"
                    />
                    <Project
                        linkHref="https://ip-address-tracker-seven-gilt.vercel.app/"
                        src={ipImg}
                        title="IP Address Tracker"
                        description="Track and locate IP addresses with real-time geolocation data. Get insights on location, ISP, and more with our fast and reliable IP address tracker."
                        codeHref="https://github.com/officialyash07/ip-address-tracker.git"
                    />
                    <Project
                        linkHref="/projects"
                        src={ceramicImg}
                        title="E-Commerce Website"
                        description="Discover premium ceramic products at Ceramic Shop! From elegant tableware to stylish home decor."
                        codeHref="https://github.com/officialyash07/ceramic-shop-full-e-commerce-website.git"
                    />
                    <Project
                        linkHref="https://facebook-login-signup-validation.vercel.app/"
                        src={facebookImg}
                        title="Facebook Validation Form"
                        description="A Facebook clone of login and sign up form with validation."
                        codeHref="https://github.com/officialyash07/facebook-login-signup-validation.git"
                    />
                </div>
                <div className={classes.secondCol}>
                    <Project
                        linkHref="https://countries-rest-api-website.vercel.app/"
                        src={countryImg}
                        title="Country Info Web App"
                        description="Get detailed insights on any country with our Country Info web app! Explore population, geography, economy, culture, and more—all in one place. Fast, reliable, and easy to use!"
                        codeHref="https://github.com/officialyash07/countries-rest-api-website.git"
                    />
                    <Project
                        linkHref="https://themed-calculator-gilt.vercel.app/"
                        src={calImg}
                        title="Calculator"
                        description="A versatile calculator with three customizable themes! Perform quick and accurate calculations while switching between light, dark, and colorful modes to match your style."
                        codeHref="https://github.com/officialyash07/themed-calculator.git"
                    />
                    <Project
                        linkHref="https://ecommerce-product-main-page-lilac.vercel.app/"
                        src={productMainImg}
                        title="E-Commerce Product Page"
                        description="A simple webpage for an e-commerce product. It includes a product image, title, description, price, and a button to add the product to the cart."
                        codeHref="https://github.com/officialyash07/ecommerce-product-main-page.git"
                    />
                    <Project
                        linkHref="/projects"
                        src={watchvistaImg}
                        title="WacthVista Website"
                        description="Your ultimate destination for premium watches. Explore a curated collection of luxury, classic, and modern timepieces designed for every style and occasion."
                        codeHref="https://github.com/officialyash07/watchvista-e-commerce-website.git"
                    />
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
